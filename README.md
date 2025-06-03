# Angular Frontend Blueprint

This is the blueprint for the frontend developed in Angular.

## Requirements

- Node 18

Is mandatory to install husky for the git-hooks

`npm install husky`

Note: In documentation there is a way to manage node versions

## Dependencies Versions

This is the implementation on Angular project features

- Angular CLI: 16.2.0
- Node: 18.10.0
- Package Manager: npm 8.19.2
- Angular: 16.2.0
- @angular-devkit/architect 0.1602.0
- @angular-devkit/build-angular 16.2.0
- @angular-devkit/core 16.2.0
- @angular-devkit/schematics 16.2.0
- @schematics/angular 16.2.0
- rxjs 7.8.1
- typescript 5.1.6
- zone.js 0.13.1

## Documentación

We implement Gitflow and convercional

- Convencional commit https://www.conventionalcommits.org/en/v1.0.0/
- Git flow https://github.com/nvie/gitflow

Install nvm On Windows:

To install NVM on Windows, you can use "nvm-windows," a version tailored for this operating system. Follow these steps:

Download the installer from the official repository: https://github.com/coreybutler/nvm-windows/releases
Run the downloaded installer and follow the installation instructions.

Verify the Installation:

Once you have installed NVM, you can verify its installation by running the following command in the terminal:

`nvm --version`

This should display the version of NVM installed on your system.

Install Node.js with NVM:

After installing NVM, you can use it to install and manage different versions of Node.js. For example, to install the latest stable version of Node.js, you can use the following command:

`nvm install stable`

## Scripts

Launch project

`npm run start`

Launch test project

`npm run test`

Launch coverage project, open index.html on the coverage folder that is created after lauch script.

`npm run coverage`

Check the files lint

`npm run lint`

Check anbd fix files linter

`npm run lint:fix`

## Test Execution

The execution of testing in a local environment is initiated using the command:

```bash
ng test
```

Additionally, a Karma configuration has been created for test execution using Chrome Headless, which is useful for running tests in non-graphical environments, such as a Docker environment or a CI environment. This configuration is included in the karma.ci.conf.js file.
