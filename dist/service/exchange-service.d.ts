import { IBaseSymbol } from "../interfaces.js";
export declare const sourcesAvailable: string[];
export declare const fetchSymbolsForSource: (source: string, quoteAsset?: string) => Promise<IBaseSymbol[]>;
