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

## Bootstrap 4

``` 
$ yarn add bootstrap
$ echo '@import "~bootstrap";' >> src/styles.scss
$ yarn add @ng-bootstrap/ng-bootstrap 
```


