export interface NodeInterface {
    credentials: { [key: string]: string };

    on(type: 'input', callback: (msg: any) => void);
    on(type: 'close', callback: () => void);

    send(msg: any);

    log(msg: string);
    warn(msg: string);
    error(msg: string);
}

export interface ConfigNode {
    token: string;
    group: string;
}
