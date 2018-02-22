"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Page {
    open(path) {
        browser.url(path);
    }
}
exports.default = Page;
