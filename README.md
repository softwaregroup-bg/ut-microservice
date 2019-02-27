# ut-standard

Standard structure of UT module.

NOTE:
> The word `standard` is used in many places as relating to
> the module name and must be renamed when creating module
> with another name. There are some exceptions, where the
> word `standard` should be kept:
>
> * `.\api\sql\standard` - name of this folder
> * `.\api\sql\standard.js` - name and contenst of this file

## Back end

Back end layers are defined in `\index.js`. It references various files
from the following places:

```text
ut-standard
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
ut-standard
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

Usually the following files within an implementatoin need
to be edited to include the front end in it:

* `/package.json` add `ut-standard` in `dependencies`

```json
{
  "name": "impl-project",
  "dependencies": {
      ...
      "ut-standard": "^8.0.0"
      ...
  }
}
```

* `/browser/common.js` add `utStandard: {browser: true}`

```js
module.exports = {
    service: 'admin',
    implementation: 'project',
    utFront: {browser: true},
    utFrontReact: {browser: true},
    // ...
    utStandard: {browser: true}
};
```

* `/browser/index.js` add `require('ut-standard')(...params)`

```js
module.exports = (...params) => [
    require('../impl/browser')(...params),
    require('ut-front')(...params),
    require('ut-front-react')(...params),
    //...
    require('ut-standard')(...params)
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
                routeName: 'ut-standard:home',
                title: 'Standard',
                permission: ['standard.system.nav'],
                props: {
                    activeClassName: 'active'
                },
                multi: [
                    {
                        routeName: 'ut-standard:fooList',
                        title: 'Foo',
                        permission: ['standard.foo.fetch'],
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