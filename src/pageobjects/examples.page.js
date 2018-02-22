"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = require("./page");
class ExamplesPage extends page_1.default {
    get searchInput() { return browser.element('#search-input'); }
    get searchResult() { return browser.element('#search-results .dropdown-item'); }
    get pageTitle() { return browser.element('.bd-title'); }
    searchItem(item) {
        this.searchInput.setValue(item);
        for (let result in browser.elements(this.searchResult.selector)) {
            console.log(result);
        }
    }
}
exports.default = ExamplesPage;
