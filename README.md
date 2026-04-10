# BankingApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Decorator exercise:

1. Create a parent component with different bank accounts
2. When selecting a card it should open up the child component with all account details
3. Hard code timed changes to the balance to mimic account balance changes
4. The balance should be formatted with "R 10 500.00"
5. he title of the bank account should not be parsed through to the child component via @input
6. Create all components yourself no cli generation
7. Parent component should reference html & css files
8. Child components should have the html & css templates within the component.
9. @Component
   @Directive
   @Attribute
   @Input
   @Output

## Part 2

- @for display bank accounts
- @if display active bank accounts
- @switch display different currencies
- @defer mimic loading screen
- @let use it with local variables
