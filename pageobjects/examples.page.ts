import Page from './page';
import { By } from 'selenium-webdriver';

export default class ExamplesPage extends Page {
    public get searchInput() { return browser.element('#search-input') }
    public get searchResult() { return browser.element('#search-results .dropdown-item') }
    public get pageTitle() { return browser.element('.bd-title') }

    public searchItem(item: string){
        return this.searchInput.setValue(item).then(()=> this.searchResult.click());
    }

    public getTitle(){
        return this.pageTitle.getText().then(elText => elText.toLowerCase());
    }
}