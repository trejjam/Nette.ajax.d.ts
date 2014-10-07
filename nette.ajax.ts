/**
 * Created by Jan on 8. 10. 2014.
 */

/// <reference path="typings/jquery/jquery.d.ts" />

interface  JQuery {
    netteAjaxOff();
}
interface JQueryStatic {
    nette:NetteAjax;
}
interface NetteAjax {
    init();
    ajax(foo:NetteAjaxAjax);

    ext(callbacks:NetteAjaxCallbacks);
    ext(name:string, callbacks:NetteAjaxCallbacks);
}
interface NetteAjaxCallbacks {
    init?:{():any;};
    load?:{(requestHandler):any;};
    before?:{(jqXHR:JQueryXHR, settings):any;};
    start?:{(jqXHR:JQueryXHR, settings):any;};
    success?:{(payload, status, jqXHR, settings):any;};
    complete?:{(jqXHR:JQueryXHR, status, settings):any;};
    error?:{(jqXHR:JQueryXHR, status, error, settings):any;};
}
interface NetteAjaxAjax {
    url:string;
    off?:Array<string>;
    validate?:NetteAjaxValidate;
}
interface NetteAjaxValidate {
    keys?:boolean;
}

(function ($) {
    $.fn.netteAjax = function (e, options) {
        return $.nette.ajax(options || {}, this[0], e);
    };

    $.fn.netteAjaxOff = function () {
        return this.off('.nette');
    };
})(jQuery);
