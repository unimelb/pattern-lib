#!/usr/bin/env bash
# pre-push hook for git
# to activate it
# ln -s pre-push.sh .git/hooks/pre-push
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
    check1&&check2
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
    jq --arg NEWVERSION "$newversion" '.version |= $NEWVERSION' "$PACKAGE" | sponge "$PACKAGE"
    git add package.json
    git commit -m "Updated to version $newversion"
}

# check if there are any commits to push to remote
commits=$(git log "$REMOTE".."$BRANCH")
if [ -z "$commits" ]; then
    exit 0
fi

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
