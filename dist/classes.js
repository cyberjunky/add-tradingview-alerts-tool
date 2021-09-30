export class ExchangeSymbol {
    constructor(exchange, baseAsset, quoteAsset, id) {
        this.id = id || `${exchange.toUpperCase()}:${baseAsset}${quoteAsset}`;
        this.exchange = exchange;
        this.quoteAsset = quoteAsset;
        this.baseAsset = baseAsset;
    }
}
export class NoInputFoundError extends Error {
    constructor(message) {
        super(message);
    }
}
export class DropdownError extends Error {
    constructor(needle, haystack) {
        super(`Unable to partial match '${needle}' in dropdown of following options:\n${haystack.join("\n")}`);
        Object.setPrototypeOf(this, DropdownError.prototype);
        this._needle = needle;
        this._haystack = haystack;
    }
    set configName(value) {
        this._configName = value;
    }
    set pageUrl(value) {
        this._pageUrl = value;
    }
}
//# sourceMappingURL=classes.js.map