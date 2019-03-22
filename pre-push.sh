#!/usr/bin/env bash
# pre-push hook for git
# updates the pre-release version number before pushing
# This will only have any effect when pushing to the dev (or $protected) branch
# Its purpose is to jig the version number to prompt remote build (currently via Semaphore)
# to install it:
# cp ./pre-push.sh .git/hooks/pre-push
# requires
#   jq, available on homebrew and elsewhere
#   sponge (from moreutils), available from homebrew and elsewhere
#   the semver node module
REPO_ROOT=$(git rev-parse --show-toplevel)
echo "Git repo is at $REPO_ROOT"
BRANCH=$(git branch | cut -d' ' -f2 | tr -d "[:space:]")
LOCAL_SEMVER_CMD="$REPO_ROOT/node_modules/semver/bin/semver"
protected_branch="dev"
REMOTE="origin/$protected_branch"
current_SEMVER=$(jq '.version' package.json |tr -d '"')
PACKAGE='package.json'
run_checks() {
    checkCommits&&check1
}
check1() {
    # check if remote SemVer is the same as local
    VERSION_CHANGED=$(git diff "$BRANCH".."$REMOTE" -G '"version":' -- "$REPO_ROOT/$PACKAGE" | wc -l)
    if [ "$VERSION_CHANGED" -gt "0" ]
    then
	echo "Remote dev branch has a different version. Please pull from remote and try again."
	return 1
    else
	updateSemVer
    fi
}
check2() {
    # a dummy always OK check (returns 0)
    return 0
}
updateSemVer() {
    local newversion
    newversion=$($LOCAL_SEMVER_CMD -i prerelease --preid 'beta' "$current_SEMVER")
    echo "New version is $newversion"
    if [ ! -z "$newversion" ]; then
	jq --arg NEWVERSION "$newversion" '.version |= $NEWVERSION' "$PACKAGE" | sponge "$PACKAGE"
	git add package.json
	git commit -m "Updated to version $newversion"
    else
	echo "Something went wrong with the version update."
	echo "Check that you have the semver node package installed."
	return 1
    fi
}

checkCommits() {
    # check if there are any commits to push to remote
    # we actually don't want any to be there, contrary to a normal
    # pre-push hook
    local commits
    commits=$(git log "$REMOTE".."$BRANCH")
    if [ -z "$commits" ]; then
	# git hooks don't read from stdin by default
	echo "Pushing to $protected_branch will trigger a build."
	read -r -p "Are you sure you wish to continue? [y/n] " response < /dev/tty
	case "$response" in
	    [yY][eE][sS]|[yY]) 
		return 0
		;;
	    *)
		return 1
		;;
	esac
    else
	echo "Don't push commits directly to the $protected_branch branch."
	echo "Please create and merge a feature branch as per gitflow."
	echo "See https://github.com/unimelb/digital-and-online-channels-development-team-knowledge/blob/master/gitflow-process/README.md"
	return 1
    fi
}

# run checks and push only if they pass
if [[ $BRANCH == "$protected_branch" ]]
then
    echo "On protected branch $protected_branch"
    run_checks
    RESULT=$?
    if [ $RESULT -ne 0 ]; then
        echo "failed"
        exit 1
    else
	echo "passed"
    fi
fi
exit 0
