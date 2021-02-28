Make this a *draft PR* in case there are changes you still need to make after reviewing these suggestions.
@adistaur and @kfernand will be automatically included as reviewers, make sure to include any other developers you feel need to review this code.  Always include collaborators in this branch as reviewers.

Before you submit a pull request, please make sure you check the following:

- [ ] You have run `**ng lint**` in the terminal before submitting.  Linting errors will cause the PR build to fail.
- [ ] If committing new files, make sure to run the `**copyright.cmd**` in the `*/build*` folder to update any missing copyright information.  Missing copyright information will cause the PR build to fail.
- [ ] You have run *All* unit tests in Visual Studio to ensure that .NET unit tests continue to pass.  Failing unit tests will cause the PR build to fail.
- [ ] You have run `**npm run test-headless**` to ensure that Angular unit tests continue to pass.  Failing unit tests will cause the PR build to fail.

### Describe the contents of the PR

## What DRs does this PR resolve or correct?
List all DRs that this PR contains and/or resolves - including these will update the appropriate JIRAs even if they are in differnt repositories.

- DRXXX-123 *example*
- DRXXX-124 *example*

## Does this PR require any updates from other repositories like shared libraries
If the change requires an updated shared library, Angular or .NET it may require further project or buld updates to make the build succceed.
- [ ] Yes
- [ ] No

## Does this PR require force another repository to be updated?
If the change requires another repository to be updated, you should lookup or create a JIRA in the target project and include the JIRA here. 
- [ ] Yes
- [ ] No

If *Yes* include the project name and the associated DR

## Are there existing unit tests for the area of the code that was modified?
- [ ] Yes
- [ ] No

## Did you add new unit tests or update existing tests to verify your changes?
- [ ] Yes
- [ ] No

If you did not update or include any new unit tests, please explain?

