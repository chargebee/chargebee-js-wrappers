interface KeyObject extends Object {
    [key: number]: any;
}
export declare function isEqual(left: KeyObject, right: KeyObject): Array<any> | boolean;
export declare function genUUID(): string;
export declare function validateCbInstance(cbInstance: any): boolean;
export {};
