# HelloAngular

```
ng serve

ng generate

  Collection "@schematics/angular" (default):
    appShell
    application
    class
    component
    directive
    enum
    guard
    interface
    library
    module
    pipe
    service
    serviceWorker
    universal
    webWorker

ng build
ng build --prod

ng test
ng e2e
```

- [x] Add `prettier` and `tslint-config-prettier`
- [x] Add mocha reporter to Karma
- [x] Update Karma coverage report style
- [x] Update linting rules and fix new linting issues
- [x] Clean up dummy content
- [x] Try [`karma-jasmine-html-reporter`](https://github.com/dfederm/karma-jasmine-html-reporter#readme)
- [x] Add back the `kjhtml` reporter to `karma.conf.js`.
- [x] Add Husky precommit checker
- [x] Add e2e:watch task with chokidar
- [x] Add Bootstrap 4 support. Add the official scss and [`@ng-bootstrap/ng-bootstrap`](https://ng-bootstrap.github.io/#/getting-started)
- [x] Add Page Not Found Route
- [x] Convert karma conf to TypeScript
- [x] Show coverage report at the end of the test and exclude test support files from the report
- [x] Add responsive container and an empty Home Page
- [ ] Add a Bootstrap nav bar with a link to Home page.
- [ ] Add My Store App to `/store` route.
- [ ] Add Tour of Heroes to `/heroes` route.

## Bootstrap 4

``` 
$ yarn add bootstrap
$ echo '@import "~bootstrap";' >> src/styles.scss
$ yarn add @ng-bootstrap/ng-bootstrap 
```

## My Store App

- [ ] Add new `"store"` route to `app-routing.module.ts`.
- [ ] Add top bar with store name and checkout icon

- [ ] Add title for product list

## Reading

- [How to split into modules?](https://malcoded.com/posts/angular-fundamentals-modules/)
- [Angular Unit Testing](https://dev.to/wescopeland/easier-angular-unit-testing-4aic)
