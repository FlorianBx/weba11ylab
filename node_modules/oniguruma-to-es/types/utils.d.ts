export const cp: any;
export function getNewCurrentFlags(current: any, { enable, disable }: {
    enable: any;
    disable: any;
}): {
    dotAll: boolean;
    ignoreCase: boolean;
};
export function getOrCreate(map: any, key: any, defaultValue: any): any;
/**
@param {keyof Target} target
@param {keyof Target} min
@returns {boolean}
*/
export function isMinTarget(target: "ES2018" | "ES2024" | "ES2025", min: "ES2018" | "ES2024" | "ES2025"): boolean;
export const r: any;
export function throwIfNot(value: any, msg: any): any;
