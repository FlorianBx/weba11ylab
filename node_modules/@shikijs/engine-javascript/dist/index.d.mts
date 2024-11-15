import { PatternScanner, RegexEngineString, RegexEngine } from '@shikijs/types';
import { IOnigMatch } from '@shikijs/vscode-textmate';
import { Options } from 'oniguruma-to-es';

interface JavaScriptRegexEngineOptions {
    /**
     * Whether to allow invalid regex patterns.
     *
     * @default false
     */
    forgiving?: boolean;
    /**
     * Cleanup some grammar patterns before use.
     *
     * @default true
     */
    simulation?: boolean;
    /**
     * The target ECMAScript version.
     *
     * For the best accuracy, Oniguruma-to-ES needs the `v` flag support in RegExp which is landed in ES2024.
     * Which requires Node.js 20+ or Chrome 112+.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
     *
     * For the maximum compatibility, you can set it to `ES2018`. Which will use the `u` flag to simulate and will be less accurate.
     *
     * Set to `auto` to detect the target version automatically.
     *
     * @default 'auto'
     */
    target?: 'ES2024' | 'ES2025' | 'ES2018' | 'auto';
    /**
     * Cache for regex patterns.
     */
    cache?: Map<string, RegExp | Error> | null;
    /**
     * Custom pattern to RegExp constructor.
     *
     * By default `oniguruma-to-es` is used.
     */
    regexConstructor?: (pattern: string) => RegExp;
}
/**
 * The default RegExp constructor for JavaScript regex engine.
 */
declare function defaultJavaScriptRegexConstructor(pattern: string, options?: Options): RegExp;
declare class JavaScriptScanner implements PatternScanner {
    patterns: string[];
    options: JavaScriptRegexEngineOptions;
    regexps: (RegExp | null)[];
    constructor(patterns: string[], options?: JavaScriptRegexEngineOptions);
    findNextMatchSync(string: string | RegexEngineString, startPosition: number): IOnigMatch | null;
}
/**
 * Use the modern JavaScript RegExp engine to implement the OnigScanner.
 *
 * As Oniguruma supports some features that can't be emulated using native JavaScript regexes, some
 * patterns are not supported. Errors will be thrown when parsing TextMate grammars with
 * unsupported patterns, and when the grammar includes patterns that use invalid Oniguruma syntax.
 * Set `forgiving` to `true` to ignore these errors and skip any unsupported or invalid patterns.
 *
 * @experimental
 */
declare function createJavaScriptRegexEngine(options?: JavaScriptRegexEngineOptions): RegexEngine;

export { type JavaScriptRegexEngineOptions, JavaScriptScanner, createJavaScriptRegexEngine, defaultJavaScriptRegexConstructor };
