/**
Generates a Regex+ compatible `pattern`, `flags`, and `options` from a Regex+ AST.
@param {import('./transform.js').RegexAst} ast
@param {import('.').Options} [options]
@returns {{
  pattern: string;
  flags: string;
  options: Object;
}}
*/
export function generate(ast: import("./transform.js").RegexAst, options?: import(".").Options): {
    pattern: string;
    flags: string;
    options: any;
};
