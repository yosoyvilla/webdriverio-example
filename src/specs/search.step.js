"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const examples_page_1 = require("../pageobjects/examples.page");
let examples = new examples_page_1.default();
let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
module.exports = function () {
    this.Given(/^I am on Bootstrap Examples page$/, function () {
        return examples.open("https://v4-alpha.getbootstrap.com/getting-started/introduction/");
    });
    this.When(/^I decide to search for "([^"]*)"$/, function (itemToSearch) {
        return examples.searchItem(itemToSearch);
    });
    this.Then(/^The content title (should|should not) be "([^"]*)"$/, function (expectation, itemToSearch) {
        return expectation === "should"
            ? expect(String(examples.searchItem(itemToSearch)).toLowerCase).toMatch(itemToSearch.toLowerCase())
            : !expect(String(examples.searchItem(itemToSearch)).toLowerCase).toMatch(itemToSearch.toLowerCase());
    });
};
