/// <reference path="typings/jquery/jquery.d.ts" />
/**
 * Created by Jan on 8. 10. 2014.
 */
interface JQuery {
    netteAjaxOff(): any;
}
interface JQueryStatic {
    nette: NetteAjax;
}
interface NetteAjax {
    init(): any;
    ajax(foo: NetteAjaxAjax): any;
    ext(callbacks: NetteAjaxCallbacks): any;
    ext(name: string, callbacks: NetteAjaxCallbacks): any;
}
interface NetteAjaxCallbacks {
    init?: () => any;
    load?: (requestHandler: any) => any;
    before?: (jqXHR: JQueryXHR, settings: any) => any;
    start?: (jqXHR: JQueryXHR, settings: any) => any;
    success?: (payload: any, status: any, jqXHR: any, settings: any) => any;
    complete?: (jqXHR: JQueryXHR, status: any, settings: any) => any;
    error?: (jqXHR: JQueryXHR, status: any, error: any, settings: any) => any;
}
interface NetteAjaxAjax {
    url: string;
    off?: string[];
    validate?: NetteAjaxValidate;
}
interface NetteAjaxValidate {
    keys?: boolean;
}
