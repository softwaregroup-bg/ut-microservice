# UnderTree standard microservice

Standard structure of UnderTree microservice

## Creating microservices based on this template

This is used as a template to create new microservices.

In an empty folder named `ut-*` run:

```bash
npm init ut ms
```

## Project links

- [Continuous Integration (Jenkins)](https://jenkins.softwaregroup.com/view/master/job/ut/job/ut-microservice/)
  [![Build Status](https://jenkins.softwaregroup.com/buildStatus/icon?job=ut/ut-microservice/master)](https://jenkins.softwaregroup.com/view/master/job/ut/job/ut-microservice/job/master/)
- [Storybook](https://jenkins.softwaregroup.com/view/master/job/ut/job/ut-microservice/job/master/Storybook/)
- [API Docs](https://jenkins.softwaregroup.com/view/master/job/ut/job/ut-microservice/job/master/Documentation/)
- [Static Code Analysis (SonarQube)](https://sca.softwaregroup.com/dashboard?id=ut-microservice)
- [UI builds (Chromatic)](https://www.chromatic.com/builds?appId=6064ae0e1e4a6000217a7ed4)

## Back end

Back end layers are defined in `\index.js`. It references various files
from the following places:

<!-- markdownlint-capture -->
<!-- markdownlint-disable MD033 MD013 MD037 -->
<pre>
📁 ut-microservice
├── <a href="./build.js">build.js</a> (build TS type definitions )
├── <a href="./config.js">config.js</a> (default configurations)
├── <a href="./index.js">index.js</a> (definition of layers)
├── <a href="./errors.js">errors.js</a> (error definitions loader)
├── <a href="./errors.json">errors.json</a> (error definitions)
├──📁 <a href="./api">api</a>
|   ├──📁 <a href="./api/lib">lib</a> (local reusable utility functions)
|   |   └── fn.js (utility function)
|   ├──📁 <a href="./api/microservice">microservice</a> (implementation of the API)
|   |   ├── <a href="./api/microservice/index.js">index.js</a> (index of all API functions)
|   |   ├── ...
|   |   └── microservice.object.predicate.js (API handler)
|   └──📁 <a href="./api/sql/schema">sql</a> MSSQL definitions
|       ├──📁 <a href="./api/sql/schema">schema</a> (schema objects: tables, procedures, views, ... )
|       |   └── *.sql
|       ├──📁 <a href="./api/sql/seed">seed</a> (mandatory data: item types, actions, ...)
|       |   └── *.merge.yaml
|       ├──📁 <a href="./api/sql/standard">standard</a> (standard data used during automated tests)
|       |   └── *.merge.yaml
|       ├── <a href="./api/sql/schema.js">schema.js</a> (configuration for the schema folder)
|       ├── <a href="./api/sql/seed.js">seed.js</a> (configuration for the seed folder)
|       └── <a href="./api/sql/standard.js">standard.js</a> (configuration for the standard folder)
├──📁 <a href="./model">model</a> (define data model and mocks)
|   ├── index.js (index of all models)
|   ├── mock.js (index of all mocks)
|   ├── ...
|   ├── foo.js (model definition)
|   └── foo.mock.js (mock definition)
├──📁 <a href="./server">server</a> (back end test / debug)
|   ├── <a href="./server/common.js">common.js</a> (common configuration)
|   ├── <a href="./server/index.js">index.js</a> (microservice dependencies)
|   └── <a href="./server/unit.js">unit.js</a> (unit test configuration)
├──📁 <a href="./test">test</a>
|   ├──📁 <a href="./test/jobs">jobs</a> (definition of parallel jobs to run during tests)
|   |   ├── <a href="./test/jobs/index.js">index.js</a> (index of all jobs)
|   |   └── test.*.js (individual jobs)
|   ├──📁 <a href="./test/steps">steps</a>
|   |   └── *.js (reusable test steps)
|   └── <a href="./test/index.test.js">index.test.js</a> (unit tests startup script)
└──📁 <a href="./validations">validations</a> (API definition)
    ├── <a href="./index.js">index.js</a> (index of all API definitions)
    └── microservice.object.predicate.js (a single API definition)
</pre>
<!-- markdownlint-restore -->

## Front end

Front end is defined in the following folder structure:

<!-- markdownlint-capture -->
<!-- markdownlint-disable MD033 MD013 MD037 -->
<pre>
📁 ut-microservice
├── <a href="./ui.test.js">ui.test.js</a> (UT test startup script)
├── 📁 <a href="./browser">browser</a>
|   └── <a href="./browser/adminPortal.js">adminPortal.js</a> (UI test portal entry)
├── 📁 <a href="./help">help</a> (user guide content)
|   ├── <a href="./help/_category_.yaml">_category_.yaml</a> (title and index configuration)
|   ├── ...
|   └── <a href="./help/microservice.tree.open.md">microservice.tree.open.md</a> (help pages)
├── 📁 <a href="./model">model</a> (define data model and mocks here)
|   ├── <a href="./model/index.js">index.js</a> (index of all models)
|   ├── <a href="./model/mock.js">mock.js</a> (index of all mocks)
|   ├── <a href="./model/dropdown.js">dropdown.js</a> (dropdowns mock)
|   ├── ...
|   ├── <a href="./model/bar.js">bar.js</a> (model definition)
|   └── <a href="./model/bar.mock.js">bar.mock.js</a> (mock definition)
├── 📁 <a href="./test">test</a>
|   └──📁 <a href="./test/ui">ui</a> (UI tests)
|       ├── index.js (test runner)
|       ├── ...
|       └── microservice.bar.play.js (Playwright script)
└── 📁 <a href="./portal">portal</a>
    ├──📁 <a href="./portal/backend">backend</a> (define optional backend handlers here)
    |   ├── index.js (index of all backend handlers)
    |   ├── ...
    |   └── microservice.object.predicate.js (backend handler)
    ├──📁 <a href="./portal/component">component</a> (define UI components here)
    |  | <a href="./portal/component/index.js">index.js</a> (index of all components)
    |  | ...
    |  └ <a href="./portal/component/microservice.foo.open.js">microservice.foo.open.js</a> (a single component)
    ├──📁 <a href="./portal/handle">handle</a> (define reusable event handlers here)
    |  | <a href="./portal/handle/index.js">index.js</a> (index of all handlers)
    |  | ...
    |  └ <a href="./portal/handle/microservice.foo.click.js">microservice.foo.click.js</a> (a single handler)
    ├── <a href="./portal/config.js">config.js</a> (configuration defaults)
    ├── <a href="./portal/index.js">index.js</a> (layers)
    ├── <a href="./portal/index.stories.js">index.stories.js</a> (storybook)
    └── <a href="./portal/mock.js">mock.js</a> (mock loader)
</pre>
<!-- markdownlint-restore -->

### Defining UI components

Components are created by following the pattern below:

```js
import React from 'react';

/** @type { import("../../handlers").handlerFactory } */
export default ({
    import: {
        handle$microserviceFooClick,
        handleTabShow,
        component$subjectObjectPredicate
    }
}) => ({
    'microservice.foo.open': () => ({
        title: 'Foo edit',
        permission: 'microservice.foo.open',
        component: ({id}) => function FooOpen() {
            return (
                <div>
                    page content for item {id}
                </div>
            );
        }
    })
});
```

Components are defined in functions named using the `subject.object.predicate`
pattern. These functions must return an object with the following properties:

- `title` - A default title to be shown in the menu or other places in the UI.
- `permission` - The permission to be checked to allow usage of the component.
- `component` - Function which returns a React function component.
  This function can be async and can call to other front-end or back-end APIs
  before returning the React component.

Examples of recommended patterns for naming component functions:

- `microservice.foo.browse` - For showing collection of `foo` items.
- `microservice.foo.new` - For creating new `foo` items.
- `microservice.foo.open` - For showing a single `foo` item for editing or viewing.
  Both editing and viewing is usually controlled through user's permissions and
  must be reflected in the respective UI elements. The component function
  (`FooOpen`) must receive a property `id` in the first argument, which is the
  identifier of the `foo` item. This `id` is also usually part of the URL or
  passed to the `handleTabShow` handler (see `ut-portal` docs for more info).

### Defining event handlers

```js
/** @type { import("../../handlers").handlerFactory } */
export default ({
    import: {
        subjectObjectPredicate
    }
}) => ({
    async 'microservice.foo.click'(params) {
        return {result: await subjectObjectPredicate({})};
    },
    'microservice.foo.clickReduce'({state, payload}) {
        return {...state, ...payload};
    }
});
```

Event handlers are defined in functions named using the
`subject.object.predicate` or `subject.object.predicateReduce`
patterns. The primary reason for having two handlers is the way Redux works,
as it does not allow updating the state from async functions, while async
functions are needed for interacting with the back end. If handling certain
events does not involve updating Redux state, the reduce handler is not needed.

The reduce handler's first argument is an object with the
properties:

- `state` - Current Redux state.
- `payload` - The result from the async handler.

This handler must return the new state, as per Redux rules.

### Handler factories

Event handler functions and component functions are wrapped in handler factory
functions, which have access to the UT framework API interface.
The following destructuring patterns are available for use within the
`import` property:

- `import:{subjectObjectPredicate}` - Call back end methods.
- `import:{component$subjectObjectPredicate}` - Use components defined
elsewhere in the UI (in this or other modules).
- `import:{'component/subject.complexNaming':componentXxx}` - Use components defined
elsewhere in the UI (in this or other modules), which follow an arbitrary naming.
- `import:{handle$subjectObjectPredicate}` - Use handlers defined
elsewhere in the UI (in this or other modules).
- `import:{'handle/subject.complexNaming':handleXxx}` - Use handlers defined
elsewhere in the UI (in this or other modules), which follow an arbitrary naming.

## Including in implementations

To include the module in an implementation:

1) Add it as dependency in `package.json`:

   ```json
   {
       "dependencies": {
           "utMicroservice": "^7.8.2"
       }
   }
   ```

1) Add it to the list of modules in `server/index.js`:

   ```js
   module.exports = (...params) => [{
       // other modules
   }, {
       main: require.resolve('ut-microservice'),
       pkg: require.resolve('ut-microservice/package.json')
   }, {
       // other modules
   }].map(item => [item, ...params]);
   ```

1) Turn it on in `server/common.js` (if needed):

   ```js
   module.exports = {
       // other settings
       utMicroservice: true
       // other settings
   }
   ```

1) Add it to the list of modules in `browser/xxxPortal.js`

   ```js
   module.exports = (...params) => [
       // other modules
       require('ut-microservice')(...params),
       // other modules
   ];
   ```

1) Turn it on in `browser/common.js` (if needed):

   ```js
   module.exports = {
       // other settings
       utMicroservice: {browser: true},
       // other settings
   }
   ```

1) If you need to add items to a portal menu, check the
   [ut-portal readme](https://github.com/softwaregroup-bg/ut-portal#readme).

## Microservice development tasks

### Front end tasks

1) Test UI components in `Storybook`, with React fast refresh, using mocked back-end:

   ```bash
   npm run storybook
   ```

   Edit [./portal/index.stories.js](./portal/index.stories.js) to:
   - match the developed components
   - add new mocked responses for the needed back end methods.

1) Use Chromatic (see the [project links](#project-links) above) to browse the
  published component library versions, documentation, visual testing, component
  screenshots, etc.
