declare namespace microservice.foo.get {
  export interface params {
    fooId?: number | string;
  }
  export interface result {
    fooId?: number | string;
    name: string;
    code: string;
    color: string;
  }
}

declare namespace microservice.foo.fetch {
  export interface params {
    color?: string;
  }
  export type result = ({
    fooId?: number | string;
    name: string;
    code: string;
    color: string;
  })[];
}

import ut from 'ut-run';
export interface handlers {
  'microservice.foo.fetch': ut.remoteHandler<microservice.foo.fetch.params, microservice.foo.fetch.result>,
  microserviceFooFetch: ut.remoteHandler<microservice.foo.fetch.params, microservice.foo.fetch.result>,
  'microservice.foo.get': ut.remoteHandler<microservice.foo.get.params, microservice.foo.get.result>,
  microserviceFooGet: ut.remoteHandler<microservice.foo.get.params, microservice.foo.get.result>
}

export interface errors {
  'error.microservice': ut.error,
  'error.microservice.colorNotFound': ut.error,
  errorMicroserviceColorNotFound: ut.error,
  'error.microservice.fooNotFound': ut.error,
  errorMicroserviceFooNotFound: ut.error
}

import login from 'ut-login/handlers'
interface methods extends login.handlers {}

import core from 'ut-core/handlers'
interface methods extends core.handlers {}

import customer from 'ut-customer/handlers'
interface methods extends customer.handlers {}

import document from 'ut-document/handlers'
interface methods extends document.handlers {}

import user from 'ut-user/handlers'
interface methods extends user.handlers {}

export type libFactory = ut.libFactory<methods, errors>
export type handlerFactory = ut.handlerFactory<methods, errors>
export type handlerSet = ut.handlerSet<methods, errors>
