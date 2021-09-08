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

declare namespace microservice.session.delete$ {
  export interface params {
    id?: number;
    data?: any;
  }
  export type result = any | null;
}

declare namespace microservice.session.get {
  export interface params {
    id?: number;
    data?: any;
  }
  export interface result {
    id?: number;
    data?: any;
  }
}

declare namespace microservice.session.set {
  export interface params {
    id?: number;
    data?: any;
  }
  export interface result {
    id?: number;
    data?: any;
  }
}

import ut from 'ut-run';
export interface handlers<location = ''> {
  'microservice.foo.fetch'?: ut.handler<microservice.foo.fetch.params, microservice.foo.fetch.result, location>,
  microserviceFooFetch?: ut.handler<microservice.foo.fetch.params, microservice.foo.fetch.result, location>,
  'microservice.foo.get'?: ut.handler<microservice.foo.get.params, microservice.foo.get.result, location>,
  microserviceFooGet?: ut.handler<microservice.foo.get.params, microservice.foo.get.result, location>,
  'microservice.session.delete'?: ut.handler<microservice.session.delete$.params, microservice.session.delete$.result, location>,
  microserviceSessionDelete?: ut.handler<microservice.session.delete$.params, microservice.session.delete$.result, location>,
  'microservice.session.get'?: ut.handler<microservice.session.get.params, microservice.session.get.result, location>,
  microserviceSessionGet?: ut.handler<microservice.session.get.params, microservice.session.get.result, location>,
  'microservice.session.set'?: ut.handler<microservice.session.set.params, microservice.session.set.result, location>,
  microserviceSessionSet?: ut.handler<microservice.session.set.params, microservice.session.set.result, location>
}

export interface errors {
  'error.microservice': ut.error,
  'error.microservice.colorNotFound': ut.error,
  errorMicroserviceColorNotFound: ut.error,
  'error.microservice.fooNotFound': ut.error,
  errorMicroserviceFooNotFound: ut.error,
  'error.microservice.zoneNotFound': ut.error,
  errorMicroserviceZoneNotFound: ut.error
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
export type handlerFactory = ut.handlerFactory<methods, errors, handlers<'local'>>
export type handlerSet = ut.handlerSet<methods, errors, handlers<'local'>>

import portal from 'ut-portal'
export type pageFactory = portal.pageFactory<methods, errors>
export type pageSet = portal.pageSet<methods, errors>
