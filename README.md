# Jobify

Job search app Angular project.

## Before start

Make sure you have npm and Angular CLI installed. To Install Angular CLI, oopen a terminal and run `npm install -g @angular/cli`.
If you clone this app run `npm i` to install all dependencies needed for the project. After that you can run this app locally using `ng serve` command.
To have more information about angular basic commands, [read here](#angular-base-commands)

## General information

### Features

Jobify is a job search application built with Angular. It has a simple dashboard that shows lots of announce of Engineering category. You can easily expand the announce clicking on it
to have all the information about the announce and the company. You can also search for a job by location with input form in the header and go deep in your research with the paginator on the header.

### Known issues

Due to a problem with the API response you are not able to search for location properly. That's because even if the API call is correctly with the correct query parameters for location
the server returns the announce with "flexible/remote" location regardless of location you inserted and i hope this'll be fixed.

### Add your api Key before start

To run the app properly via `ng serve` you have to add your API key in `src\app\job.service.ts`.
You can get your API Key [here](https://www.themuse.com/developers/api/v2/apps).

### Deployed on Firebase

You can try and use the app [here](https://jobify-f4df2.web.app). The app is deployed on firebase.
To getting started with firebase install firebase globally using the command `npm install -g firebase-tools`.
After building the project you can deploy it using `ng deploy` command.

### Aesthetic and graphic features powered by Angular Material

Components like `<mat-card>` are given by Angular Material.
Visit [this](https://material.angular.io/guide/getting-started) to get started with angular material.
Visit [this](https://material.angular.io/components/categories) to look at the components used in the app.


## Angular base commands

Basic commands to run the app and creating new component are given below.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
