# UT standard microservice

Standard structure of UT microservice

NOTE:
> The word `microservice` is used in many places as relating to
> the module name and must be renamed when creating module
> with another name.

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

* `/package.json` add `ut-microservice` in `dependencies`

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

* `/browser/common.js` add `utMicroservice: {browser: true}`

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

* `/browser/index.js` add `require('ut-microservice')(...params)`

```js
module.exports = (...params) => [
    require('../impl/browser')(...params),
    require('ut-front')(...params),
    require('ut-front-react')(...params),
    //...
    require('ut-microservice')(...params)
];

```

* `/ui/administration/provider.js` (or equivalent)
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
