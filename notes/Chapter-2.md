### Dependencies

-   Dependencies are a packages of code or libraries which are required to function our project either during development or in production

-   There are 2 kinds of dependencies.
    1. Dev Dependencies
    2. Normal Dependencies

## What is Dev dependency?

Dev dependency is a package of a code or library which is required during development of the project.

## What is Normal dependency?

Normal dependency is a package of a code or library which is required during development and in production of the project.

## What is transitive dependency?

When one package/library is dependent on another package/library then it is called transitive dependency

### What is bundler?

-   Bundler packages/bundles our project properly so that it can be shipped to production.

-   Which basically minifies our code, remove our comments etc. to make it production ready.

### Parcel package

    1. Creates dev build.
    2. Creates local server to run our project.
    3. Does HMR - Hot Module Replacement i.e. basically meaning reloading the page.
    4. Parcel perfoms HMR by using file changing algorithm which is built in c++
    5. Parcel also does **Caching** for faster builds.
    6. Parcel also does image optimization.
    7. Bundles the files when we run the build
    8. When build is run for production parcel minifies the files.

### Building the development build

command

```console
npx parcel index.html
```

### Building the production build

command

```console
npx parcel build index.html
```
