# UnderTree standard microservice

Standard structure of UnderTree microservice

## Creating microservices based on this template

This is used as a template to create new microservices.

In an empty folder named `ut-*` run:

```bash
npm init ut ms
```

## Project links

- [Continuous Integration (Jenkins)](https://jenkins.softwaregroup.com/view/master/job/ut5/job/ut-microservice/)
  [![Build Status](https://jenkins.softwaregroup.com/buildStatus/icon?job=ut5/ut-microservice/master)](https://jenkins.softwaregroup.com/view/master/job/ut5/job/ut-microservice/job/master/)
- [Static Code Analysis (SonarQube)](https://sonar.softwaregroup.com/dashboard?id=ut-microservice%3Aorigin%2Fmaster)
- [Error aggregator (Sentry)](http://sentry.k8s.softwaregroup-bg.com/sentry/ut-microservice/dashboard/?statsPeriod=1w)

## Back end

Back end layers are defined in `\index.js`. It references various files
from the following places:

```text
ut-microservice
├── index.js
├── errors.js
├── errors.json
├── api
|   ├── script
|   |   └── index.js
|   └── sql
|       ├── schema
|       |   └── *.sql
|       ├── seed
|       |   └── *.sql
|       ├── standard
|       |   └── *.sql
|       ├── schema.js
|       ├── seed.js
|       └── standard.js
├── test
|   ├── integration
|   |   └── *.js
|   └── sql
|       ├── schema.js
|       └── schema
|           └── *.sql
└── validations
    └── index.js
```

## Front end

Front end layers are defined in `\browser.js`. Note adding
this line in `\package.json`: `"browser": "browser.js"`.
Front end layers are defined in various files in the following places:

```text
ut-microservice
├── browser.js
└── ui
    └── react
        ├── pages
        |   └ **
        ├── containers
        |   └ **
        ├── index.js
        ├── reducers.js
        ├── registerRoutes.js
        └── routes.js
```

Usually the following files within an application need
to be edited to include the front end in it:

- `/package.json` add `ut-microservice` in `dependencies`

```json
{
  "name": "impl-project",
  "dependencies": {
      ...
      "ut-microservice": "^7.0.0"
      ...
  }
}
```

- `/browser/common.js` add `utMicroservice: {browser: true}`

```js
module.exports = {
    service: 'admin',
    implementation: 'project',
    utFront: {browser: true},
    utFrontReact: {browser: true},
    // ...
    utMicroservice: {browser: true}
};
```

- `/browser/index.js` add `require('ut-microservice')(...params)`

```js
module.exports = (...params) => [
    require('../impl/browser')(...params),
    require('ut-front')(...params),
    require('ut-front-react')(...params),
    //...
    require('ut-microservice')(...params)
];

```

- `/ui/administration/provider.js` (or equivalent)
  add menu entries in `mainTabset`:

```js
//...
export default class Provider extends Component {
    getChildContext() {
        return {
            portalName: 'Administration',
            implementationStyle: implementationStyle,
            mainUrl: getLink('ut-impl:dashboard'),
            getDocsUrl: getDocsUrl,
            mainTabset: [
            //...
            {
                routeName: 'ut-microservice:home',
                title: 'Microservice',
                permission: ['microservice.system.nav'],
                props: {
                    activeClassName: 'active'
                },
                multi: [
                    {
                        routeName: 'ut-microservice:fooList',
                        title: 'Foo',
                        permission: ['microservice.foo.fetch'],
                        props: {
                            activeClassName: implementationStyle.active
                        }
                    }
                ]
            }]
        }
    }
    //...
}
//...

```
