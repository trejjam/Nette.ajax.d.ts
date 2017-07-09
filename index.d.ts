interface JQueryStatic {
	nette: INetteAjax;
}

interface INetteAjax {
	ext(name: string, callbacks?: INetteAjaxCallbacks | boolean | null, context?);

	init(load ?, loadContext ?);

	load();

	ajax(settings ?, ui ?, e ?);

	handleXHR(xhr ?, settings ?);
}

interface INetteAjaxCallbacks {
	init?: () => any;
	load?: (requestHandler) => any;
	prepare?: (settings: INetteAjaxSetting | string) => any;
	before?: (jqXHR: JQueryXHR, settings: INetteAjaxSetting | string) => any;
	start?: (jqXHR: JQueryXHR, settings: INetteAjaxSetting | string) => any;
	success?: (payload, status, jqXHR: JQueryXHR, settings: INetteAjaxSetting | string) => any;
	complete?: (jqXHR: JQueryXHR, status, settings: INetteAjaxSetting | string) => any;
	error?: (jqXHR: JQueryXHR, status, error, settings: INetteAjaxSetting | string) => any;
}

interface INetteAjaxSetting extends JQueryAjaxSettings {
	nette?: INetteAjaxSettingsObject;
	off?: any ;
	prepare?: (settings: INetteAjaxSetting) => void;
}

interface INetteAjaxSettingsObject {
	e: Event;
	el: HTMLElement;
	form: HTMLFormElement | null;
	form: any;
	isForm: boolean;
	isImage: boolean;
	isSubmit: boolean;
}
