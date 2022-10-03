declare namespace microserviceTableTypes {}
declare namespace db$microservice_bar_add {
  export interface params {
    /**
     * object to create
     */
    bar?: microserviceTableTypes.barTT.params[] | microserviceTableTypes.barTT.params;
    /**
     * information for the user that makes the operation
     */
    meta?: coreTableTypes.metaDataTT.params[] | coreTableTypes.metaDataTT.params;
  }
  export type result = any;
}

declare namespace db$microservice_bar_delete$ {
  export interface params {
    /**
     * bar ids
     */
    barId?: coreTableTypes.arrayNumberList.params[] | coreTableTypes.arrayNumberList.params;
    /**
     * information for the user that makes the operation
     */
    meta?: coreTableTypes.metaDataTT.params[] | coreTableTypes.metaDataTT.params;
  }
  export type result = any;
}

declare namespace db$microservice_bar_edit {
  export interface params {
    /**
     * object to edit
     */
    bar?: microserviceTableTypes.barTT.params[] | microserviceTableTypes.barTT.params;
    /**
     * information for the user that makes the operation
     */
    meta?: coreTableTypes.metaDataTT.params[] | coreTableTypes.metaDataTT.params;
  }
  export type result = any;
}

declare namespace db$microservice_bar_fetch {
  export interface params {
    bar_barDescription?: string | null;
    bar_barName?: string | null;
    /**
     * information about the user making the operation
     */
    meta?: coreTableTypes.metaDataTT.params[] | coreTableTypes.metaDataTT.params;
    /**
     * information for ordering
     */
    orderBy?: coreTableTypes.orderByTT.params[] | coreTableTypes.orderByTT.params;
    /**
     * information for paging
     */
    paging?: coreTableTypes.pagingTT.params[] | coreTableTypes.pagingTT.params;
  }
  export type result = any;
}

declare namespace db$microservice_bar_get {
  export interface params {
    barId?: number | string;
  }
  export type result = any;
}

declare namespace db$microservice_foo_fetch {
  export interface params {
    color?: string | null;
  }
  export type result = any;
}

declare namespace db$microservice_foo_get {
  export interface params {
    fooId?: number | string;
  }
  export type result = any;
}

declare namespace db$microservice_foo_merge {
  export interface params {
    foo?: microserviceTableTypes.fooMergeTT.params[] | microserviceTableTypes.fooMergeTT.params;
    meta?: coreTableTypes.metaDataTT.params[] | coreTableTypes.metaDataTT.params;
  }
  export type result = any;
}

declare namespace microservice_bar_add {
  export interface params {
    bar?: {
      barDescription?: string | null;
      barId?: number | string;
      barName: string;
    };
  }
  export interface result {
    bar?: {
      barDescription?: string | null;
      barId: number | string;
      barName: string;
    };
  }
}

declare namespace microservice_bar_delete$ {
  export interface params {
    barId?: (number | string)[];
  }
  export interface result {
    bar: ({
      barDescription?: string | null;
      barId: number | string;
      barName: string;
    })[];
  }
}

declare namespace microservice_bar_edit {
  export interface params {
    bar?: {
      barDescription?: string | null;
      barId: number | string;
      barName: string;
    };
  }
  export interface result {
    bar?: {
      barDescription?: string | null;
      barId: number | string;
      barName: string;
    };
  }
}

declare namespace microservice_bar_fetch {
  export interface params {
    bar?: {
      barDescription?: string | null;
      barName?: string | null;
    };
    orderBy?: ({
      dir?: 'ASC' | 'DESC';
      field?: string;
    })[];
    paging?: {
      pageNumber?: number;
      pageSize?: number;
      pagesTotal?: number;
      recordsTotal?: number;
    };
  }
  export interface result {
    bar: ({
      barDescription?: string | null;
      barId: number | string;
      barName: string;
    })[];
    pagination?: {
      pageNumber?: number;
      pageSize?: number;
      pagesTotal?: number;
      recordsTotal?: number;
    };
  }
}

declare namespace microservice_bar_get {
  export interface params {
    barId: number | string;
  }
  export interface result {
    bar?: {
      barDescription?: string | null;
      barId: number | string;
      barName: string;
    };
  }
}

declare namespace microservice_document_add {
  export interface params {
    document?: {
      documentIcon?: {
        filename?: string;
        headers?: object;
        originalFilename?: string;
      };
      documentName: string;
    };
    page?: ({
      attachment?: {
        filename?: string;
        headers?: object;
        originalFilename?: string;
      };
      title?: string | null;
    })[];
  }
  export interface result {
    document?: {
      documentIcon?: {
        filename?: string;
        headers?: object;
        originalFilename?: string;
      };
      documentId: number | string;
      documentName: string;
    };
    page?: ({
      attachment?: {
        filename?: string;
        headers?: object;
        originalFilename?: string;
      };
      title?: string | null;
    })[];
  }
}

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
  export interface result {
    css?: string;
  }
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

declare namespace microserviceTableTypes.barTT {
  export interface params {
    barDescription?: string | null;
    barId?: number | string;
    barName?: string | null;
  }
  export type result = unknown;
}

declare namespace microserviceTableTypes.barTTU {
  export interface params {
    barDescription?: string | null;
    barDescriptionUpdated?: true | false | 0 | 1 | '0' | '1' | null;
    barId?: number | string;
    barIdUpdated?: true | false | 0 | 1 | '0' | '1' | null;
    barName?: string | null;
    barNameUpdated?: true | false | 0 | 1 | '0' | '1' | null;
  }
  export type result = unknown;
}

declare namespace microserviceTableTypes.fooMergeTT {
  export interface params {
    /**
     * code of the item, should be unique in the type
     */
    code?: string | null;
    /**
     * code of the item, should be unique in the type
     */
    color?: string | null;
    /**
     * name of the item
     */
    name?: string | null;
  }
  export type result = unknown;
}

declare namespace microserviceTableTypes.fooTT {
  export interface params {
    color?: string | null;
    fooId?: number | string;
  }
  export type result = unknown;
}

declare namespace microserviceTableTypes.fooTTU {
  export interface params {
    color?: string | null;
    colorUpdated?: true | false | 0 | 1 | '0' | '1' | null;
    fooId?: number | string;
    fooIdUpdated?: true | false | 0 | 1 | '0' | '1' | null;
  }
  export type result = unknown;
}

import ut from 'ut-run';
export interface ports<location = ''> {
  'db/microservice.bar.add'?: ut.handler<db$microservice_bar_add.params, db$microservice_bar_add.result, location>,
  db$microserviceBarAdd?: ut.handler<db$microservice_bar_add.params, db$microservice_bar_add.result, location>,
  'db/microservice.bar.delete'?: ut.handler<db$microservice_bar_delete$.params, db$microservice_bar_delete$.result, location>,
  db$microserviceBarDelete?: ut.handler<db$microservice_bar_delete$.params, db$microservice_bar_delete$.result, location>,
  'db/microservice.bar.edit'?: ut.handler<db$microservice_bar_edit.params, db$microservice_bar_edit.result, location>,
  db$microserviceBarEdit?: ut.handler<db$microservice_bar_edit.params, db$microservice_bar_edit.result, location>,
  'db/microservice.bar.fetch'?: ut.handler<db$microservice_bar_fetch.params, db$microservice_bar_fetch.result, location>,
  db$microserviceBarFetch?: ut.handler<db$microservice_bar_fetch.params, db$microservice_bar_fetch.result, location>,
  'db/microservice.bar.get'?: ut.handler<db$microservice_bar_get.params, db$microservice_bar_get.result, location>,
  db$microserviceBarGet?: ut.handler<db$microservice_bar_get.params, db$microservice_bar_get.result, location>,
  'db/microservice.foo.fetch'?: ut.handler<db$microservice_foo_fetch.params, db$microservice_foo_fetch.result, location>,
  db$microserviceFooFetch?: ut.handler<db$microservice_foo_fetch.params, db$microservice_foo_fetch.result, location>,
  'db/microservice.foo.get'?: ut.handler<db$microservice_foo_get.params, db$microservice_foo_get.result, location>,
  db$microserviceFooGet?: ut.handler<db$microservice_foo_get.params, db$microservice_foo_get.result, location>,
  'db/microservice.foo.merge'?: ut.handler<db$microservice_foo_merge.params, db$microservice_foo_merge.result, location>,
  db$microserviceFooMerge?: ut.handler<db$microservice_foo_merge.params, db$microservice_foo_merge.result, location>
}
interface methods extends ports {}

export interface handlers<location = ''> {
  'microservice.bar.add'?: ut.handler<microservice_bar_add.params, microservice_bar_add.result, location>,
  microserviceBarAdd?: ut.handler<microservice_bar_add.params, microservice_bar_add.result, location>,
  'microservice.bar.delete'?: ut.handler<microservice_bar_delete$.params, microservice_bar_delete$.result, location>,
  microserviceBarDelete?: ut.handler<microservice_bar_delete$.params, microservice_bar_delete$.result, location>,
  'microservice.bar.edit'?: ut.handler<microservice_bar_edit.params, microservice_bar_edit.result, location>,
  microserviceBarEdit?: ut.handler<microservice_bar_edit.params, microservice_bar_edit.result, location>,
  'microservice.bar.fetch'?: ut.handler<microservice_bar_fetch.params, microservice_bar_fetch.result, location>,
  microserviceBarFetch?: ut.handler<microservice_bar_fetch.params, microservice_bar_fetch.result, location>,
  'microservice.bar.get'?: ut.handler<microservice_bar_get.params, microservice_bar_get.result, location>,
  microserviceBarGet?: ut.handler<microservice_bar_get.params, microservice_bar_get.result, location>,
  'microservice.document.add'?: ut.handler<microservice_document_add.params, microservice_document_add.result, location>,
  microserviceDocumentAdd?: ut.handler<microservice_document_add.params, microservice_document_add.result, location>,
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
  'error.example.auth': ut.error,
  errorExampleAuth: ut.error,
  'error.microservice': ut.error,
  'error.microservice.colorNotFound': ut.errorParam<{ color: string | number }>,
  errorMicroserviceColorNotFound: ut.errorParam<{ color: string | number }>,
  'error.microservice.fooNotFound': ut.errorParam<{ fooId: string | number }>,
  errorMicroserviceFooNotFound: ut.errorParam<{ fooId: string | number }>,
  'error.microservice.zoneNotFound': ut.errorParam<{ zone: string | number }>,
  errorMicroserviceZoneNotFound: ut.errorParam<{ zone: string | number }>
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
export type test = ut.test<methods & handlers>
export type steps = ut.steps<methods & handlers>

import portal from 'ut-portal'
export type pageFactory = portal.pageFactory<methods, errors>
export type pageSet = portal.pageSet<methods, errors>
