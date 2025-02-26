export interface ILanguage {
    [key: string]: any;
    app: IApp;
    reuse: IReuse;
    nodeMonitor: INodeMonitor;
}

export interface IApp {
    company: string;
}

export interface INodeMonitor {}

export interface IReuse {
    search: string;
    colon: string;
}
