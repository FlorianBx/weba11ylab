export type Options = {
    accuracy?: "default" | "strict" | "loose";
    avoidSubclass?: boolean;
    flags?: import("./tokenize.js").OnigurumaFlags;
    global?: boolean;
    hasIndices?: boolean;
    maxRecursionDepth?: number | null;
    target?: "ES2018" | "ES2024" | "ES2025";
    tmGrammar?: boolean;
    verbose?: boolean;
};
/**
Works the same as JavaScript's native `RegExp` constructor in all contexts, but can be given results from `toDetails` to produce the same result as `toRegExp`.
@class
@param {string | EmulatedRegExp} pattern
@param {string} [flags]
@param {{
  name: string;
  subpattern?: string;
}} [strategy]
*/
export class EmulatedRegExp extends RegExp {
    constructor(pattern: any, flags: any, strategy: any);
    #private;
}
/**
@typedef {{
  accuracy?: keyof Accuracy;
  avoidSubclass?: boolean;
  flags?: import('./tokenize.js').OnigurumaFlags;
  global?: boolean;
  hasIndices?: boolean;
  maxRecursionDepth?: number | null;
  target?: keyof Target;
  tmGrammar?: boolean;
  verbose?: boolean;
}} Options
*/
/**
Accepts an Oniguruma pattern and returns the details needed to construct an equivalent JavaScript `RegExp`.
@param {string} pattern Oniguruma regex pattern.
@param {Options} [options]
@returns {{
  pattern: string;
  flags: string;
  strategy?: {
    name: string;
    subpattern?: string;
  };
}}
*/
export function toDetails(pattern: string, options?: Options): {
    pattern: string;
    flags: string;
    strategy?: {
        name: string;
        subpattern?: string;
    };
};
/**
Returns an Oniguruma AST generated from an Oniguruma pattern.
@param {string} pattern Oniguruma regex pattern.
@param {{
  flags?: import('./tokenize.js').OnigurumaFlags;
}} [options]
@returns {import('./parse.js').OnigurumaAst}
*/
export function toOnigurumaAst(pattern: string, options?: {
    flags?: import("./tokenize.js").OnigurumaFlags;
}): import("./parse.js").OnigurumaAst;
/**
Accepts an Oniguruma pattern and returns an equivalent JavaScript `RegExp`.
@param {string} pattern Oniguruma regex pattern.
@param {Options} [options]
@returns {RegExp | EmulatedRegExp}
*/
export function toRegExp(pattern: string, options?: Options): RegExp | EmulatedRegExp;
