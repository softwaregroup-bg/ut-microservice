# Implementing XML API

Follow the file name patterns below to implement this. Here is what each
of the files does:

1. Include the file below in the validations. It enables XML payload in
   the request body and leaves parsing to the script port.

   ```js
   // ut-microservice/validation/object.js
   const xml = {
       auth: false,
       body: {
           parse: false,
           allow: [
               'application/soap+xml',
               'application/xml',
               'text/xml'
           ]
       }
   };
   /** @type { import("ut-run").validationFactory } */
   module.exports = () => ({
       'subject.object.predicate': () => ({
           ...xml,
           description: 'Perform predicate on object'
       }),
       // add other methods here
   });
   ```

2. Create a template for parsing the `subject.object.predicate` request payload.
   This template will help convert the request XML to a JS object. Templates
   for parsing must end with `.parse.xml`. The other part of the filename
   represents the handler name, where `request.sent` denotes the hook called
   by the script port before sending the request to the
   `subject.object.predicate` method handler.

   Placeholders in the template allow extracting
   data in the specified properties of the JS object.

   ```xml
   <!-- ut-microservice/api/object/subject.object.predicate.request.send.parse.xml -->
   <some>
       <deep>
           <nested>
               <structure>${a}</structure>
           </nested>
       </deep>
       <veryVeryLongTagName>${b.c}</veryVeryLongTagName>
       <potentially>
           <missing>${d}</missing>
       </potentially>
   </some>
   ```

3. Create a handler for the method `subject.object.predicate`. This handler
   will receive the resulting JS object from the XML parsing, do the actual
   work and return some JS object as a result. This is the usual handler,
   where the api parameter can be destructured as `{import: {something}}`
   or `{config}`, etc.

   ```js
   // ut-microservice/api/object/subject.object.predicate.js
   module.exports = function object(api) {
       return {
           'subject.object.predicate'({a, b: {c}, d}) {
               return {a, b: {c}};
           }
       };
   };
   ```

4. Create a template for rendering the `subject.object.predicate` response
   payload. This template will help convert the response JS object to XML.
   Templates for rendering must end with `.render.xml`. The other part of the
   filename represents the handler name, where `response.receive` denotes the
   hook called by the script port after receiving the response from the
   `subject.object.predicate` method handler.

   ```xml
   <!-- ut-microservice/api/object/subject.object.predicate.response.receive.render.xml -->
   <response>
       <placeholder>${params.a}</placeholder>
       <chaining>${params.b?.c}</chaining>
       <coalescing>${params.d ?? ''}</coalescing>
   </response>
   ```

5. Create send/receive handlers from the templates and load method handlers:

   ```js
   // ut-microservice/api/subject/index.js
   const template = require('ut-function.xjx');

   module.exports = async function subject({vfs}) {
       return [
           await template(vfs, __dirname),
           require('./subject.object.predicate')
       ]
   }
   ```

6. Create a script port for the module's namespace `subject` and load all the handlers:

   ```js
   // ut-microservice/index.js
   module.exports = require('ut-run').microservice(module, require, () =>
       function utMicroservice() {
           return {
               orchestrator: () => [
                   require('ut-function.dispatch')({
                       namespace: ['subject'],
                       imports: ['utMicroservice.subject']
                   })
               ]
           };
       }
   );
   ```

7. Optionally create a `.http` file for manual testing:

   ```http
   # ut-microservice/test/manual.http
   POST http://localhost:8090/rpc/subject/object/predicate
   Content-Type: application/xml

   <?xml version="1.0" encoding="UTF-8"?>
   <some>
       <deep>
           <nested>
               <structure>1</structure>
           </nested>
       </deep>
       <veryVeryLongTagName>2</veryVeryLongTagName>
   </some>
   ```
