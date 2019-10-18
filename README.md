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
- [x] Disable Ivy
- [x] Remove ng-bootstrap, add jquery and popper.js to use default Bootstrap 4
- [x] Add a Bootstrap nav bar with a link to Home page.
- [x] Replace karma with Jest.
- [ ] Create Store Module and add My Store App to `/store` route.
- [ ] Add Tour of Heroes to `/heroes` route.

## Bootstrap 4

Original Bootstrap 4.

```zsh
$ yarn add bootsrap
$ yarn add jquery
$ yarn add popper.js
$ echo '@import "~bootstrap";' >> src/styles.scss
```

Extend `angular.json` to import external packages in `projects > hello-angular > architect > build > options`.

```zsh
"scripts": [
  "./node_modules/jquery/dist/jquery.slim.min.js",
  "./node_modules/popper.js/dist/umd/popper.min.js",
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```


Alternative option: using `ng-bootstrap`. No animation and custom API.

```zsh
$ yarn add bootstrap
$ echo '@import "~bootstrap";' >> src/styles.scss
$ yarn add @ng-bootstrap/ng-bootstrap 
```

## My Store App

- [ ] Add new `"store"` route to `app-routing.module.ts`.
- [ ] Add top bar with store name and checkout icon

- [ ] Add title for product list

## Replace karma unit test with Jest

```
ng add @briebug/jest-schematic
```

- Check `package.json` file. Remove almost everything which is `karma` and `jasmine` related. You can remove the `@briebug/jest-schematic` also.
- If you need `protractor`, you can keep the `jasmine-spec-reporter` package.
- Run `yarn format`.

Known issue: projects are not supported out of the box, they need a manual adjustment.


## Reading

- [How to split into modules?](https://malcoded.com/posts/angular-fundamentals-modules/)
- [Angular Unit Testing](https://dev.to/wescopeland/easier-angular-unit-testing-4aic)
