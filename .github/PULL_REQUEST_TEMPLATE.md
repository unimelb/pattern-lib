# Description

Please include a summary of the change and which issue is fixed. Please also include relevant motivation and context. List any dependencies that are required for this change.

Fixes # (issue number)

## Type of change

Please delete options that are not relevant.

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

# Checklist:

- [ ] Make sure to do not repeat yourself (DRY)
- [ ] Snapshots tested
- [ ] A11y tested
- [ ] CSS utilises BEM naming convention and structure
- [ ] Code does not mutate variables/objects/arrays but instead uses `map`, `filter` etc to return a new array/object
- [ ] Crossbrowser testing (Safari 8+, iOS 8.4+, Android 4.4+, Firefox ESR (v52.x), iPhone (4s,6), iPad 2, Galaxy s5) 
- [ ] My changes generate no new warnings
- [ ] I have added tests (e2e and unit) that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules
- [ ] Added the new component to the index.js (Vue and Lib) export

# Reviewer Checklist

- [ ] Code is not repeated (DRY)
- [ ] ES6+ code is used where possible
- [ ] Code does not mutate variables/objects/arrays but instead uses `map`, `filter` etc to return a new array/object
- [ ] CSS utilises BEM naming convention and structure
- [ ] Snapshots tested against a copy of dev snapshots to check UI changes are intended
- [ ] A11y tested
- [ ] Crossbrowser tested in at least IE11