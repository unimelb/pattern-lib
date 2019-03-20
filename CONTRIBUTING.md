# Contribution guidelines

Below is a basic run down to get started.

## Submitting a change

- Checkout the latest version of the `dev` branch.
- Create a new branch off `dev`.
  - Prefix the branch name with `feature/`, e.g. `feature/my-change`.
- Make the changes in as many commits as necessary.
- Once the changes are ready, create a Pull Request.
  - Point it to the `dev` branch. Github should do this automatically.
  - The Pull Request will have a default description. Feel free to add more to it, but please **do** follow the bullet points.
  - If you are just getting started with the code base, feel free to submit the Pull Request for review to another developer who is more familiar withe the code.
  - Ensure that the `title` and `description` fields provide enough information for your team member to review
- Wait for the build of the last Pull Request commit to complete successfully on [SemaphoreCI](https://semaphoreci.com/unimelb/pattern-lib). Build status is indicated next to each commit.
  - A yellow circle means the build is currently in progress.
  - A red cross means the build has failed. Click on it to access the build logs.
  - A green tick means the build has completed successfuly.
- If you submitted the Pull Request for review, wait for comments or approval.
- Merge the Pull Request. This will trigger another build and the code will be deployed to the staging environment.
- Delete the branch.
