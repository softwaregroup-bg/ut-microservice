declare namespace microservice_foo_fetch {
  export interface params {
    color?: string;
  }
  export type result = ({
    code: string;
    color: string;
    fooId?: number | string;
    name: string;
  })[];
}

declare namespace microservice_foo_get {
  export interface params {
    fooId?: number | string;
  }
  export interface result {
    code: string;
    color: string;
    fooId?: number | string;
    name: string;
  }
}

declare namespace microservice_foo_process {
  export interface params {
    fooId?: number | string;
  }
  export interface result {}
}

declare namespace microservice_session_delete$ {
  export interface params {
    data?: any;
    id?: number;
  }
  export type result = any | null;
}

declare namespace microservice_session_get {
  export interface params {
    data?: any;
    id?: number;
  }
  export interface result {
    data?: any;
    id?: number;
  }
}

declare namespace microservice_session_set {
  export interface params {
    data?: any;
    id?: number;
  }
  export interface result {
    data?: any;
    id?: number;
  }
}

import ut from 'ut-run';
export interface ports<location = ''> {

}
interface methods extends ports {}

export interface handlers<location = ''> {
  'microservice.foo.fetch'?: ut.handler<microservice_foo_fetch.params, microservice_foo_fetch.result, location>,
  microserviceFooFetch?: ut.handler<microservice_foo_fetch.params, microservice_foo_fetch.result, location>,
  'microservice.foo.get'?: ut.handler<microservice_foo_get.params, microservice_foo_get.result, location>,
  microserviceFooGet?: ut.handler<microservice_foo_get.params, microservice_foo_get.result, location>,
  'microservice.foo.process'?: ut.handler<microservice_foo_process.params, microservice_foo_process.result, location>,
  microserviceFooProcess?: ut.handler<microservice_foo_process.params, microservice_foo_process.result, location>,
  'microservice.session.delete'?: ut.handler<microservice_session_delete$.params, microservice_session_delete$.result, location>,
  microserviceSessionDelete?: ut.handler<microservice_session_delete$.params, microservice_session_delete$.result, location>,
  'microservice.session.get'?: ut.handler<microservice_session_get.params, microservice_session_get.result, location>,
  microserviceSessionGet?: ut.handler<microservice_session_get.params, microservice_session_get.result, location>,
  'microservice.session.set'?: ut.handler<microservice_session_set.params, microservice_session_set.result, location>,
  microserviceSessionSet?: ut.handler<microservice_session_set.params, microservice_session_set.result, location>
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

import login, {loginTableTypes} from 'ut-login/handlers'
interface methods extends login.handlers {}

import core, {coreTableTypes} from 'ut-core/handlers'
interface methods extends core.handlers {}

import customer, {customerTableTypes} from 'ut-customer/handlers'
interface methods extends customer.handlers {}

import document, {documentTableTypes} from 'ut-document/handlers'
interface methods extends document.handlers {}

import user, {userTableTypes} from 'ut-user/handlers'
interface methods extends user.handlers {}

export type libFactory = ut.libFactory<methods, errors>
export type handlerFactory = ut.handlerFactory<methods, errors, handlers<'local'>>
export type handlerSet = ut.handlerSet<methods, errors, handlers<'local'>>

import portal from 'ut-portal'
export type pageFactory = portal.pageFactory<methods, errors>
export type pageSet = portal.pageSet<methods, errors>
