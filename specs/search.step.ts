import ExamplesPage from '../pageobjects/examples.page';
let examples = new ExamplesPage();
import { expect } from 'chai'
import { defineSupportCode } from 'cucumber';

    defineSupportCode(({ Given, When, Then }) => {
        Given(/^I am on Bootstrap Examples page$/, function() {
            return examples.open(
              "https://v4-alpha.getbootstrap.com/getting-started/introduction/"
            );
          });
          When(/^I decide to search for "([^"]*)"$/, function(itemToSearch) {
            return examples.searchItem(itemToSearch);
          });
        
          Then(/^The content title (should|should not) be "([^"]*)"$/, function(
            expectation,
            itemToSearch: string
          ) {
            return expectation === "should"
              ? examples.getTitle().then(elText => expect(elText).to.be.equal(itemToSearch.toLowerCase()))
              : examples.getTitle().then(elText => expect(elText).to.not.be.equal(itemToSearch.toLowerCase()))
          });
    });
