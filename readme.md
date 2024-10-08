# Project Documentation

This project aims to create a GitHub Actions CI pipeline for building a Docker image for an Express app and pushing it to a Docker Hub repository.

## Prerequisites

Before setting up the CI pipeline, make sure you have the following prerequisites:

- A GitHub repository for your Express app
- Docker installed on your local machine
- A Docker Hub account

## Setting up the CI Pipeline

To set up the CI pipeline, follow these steps:

1. Create a new file named `.github/workflows/ci.yml` in the root of your GitHub repository.

2. Add the following content to the `ci.yml` file:

```yaml
name: CI Pipeline

on:
    push:
        branches:
            - main

jobs:
    build:
        runs-on: ubuntu-latest

        steps:
            - name: Checkout code
                uses: actions/checkout@v2

            - name: Build Docker image
                run: docker build -t <your-docker-image-name> .

            - name: Log in to Docker Hub
                run: docker login -u <your-docker-hub-username> -p <your-docker-hub-password>

            - name: Push Docker image to Docker Hub
                run: docker push <your-docker-image-name>
```

3. Replace `<your-docker-image-name>` with the desired name for your Docker image.

4. Replace `<your-docker-hub-username>` and `<your-docker-hub-password>` with your Docker Hub credentials.

5. Commit and push the changes to your GitHub repository.

## Conclusion

With the CI pipeline set up, every time you push changes to the `main` branch of your GitHub repository, the pipeline will automatically build a Docker image for your Express app and push it to your Docker Hub repository.
