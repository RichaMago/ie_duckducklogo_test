const {Given, When, Then} = require('cucumber');
const { Selector } = require('testcafe');
const ClientFunction = require('testcafe').ClientFunction;
const homePageElements = require('../pages/ducklogo_pages.js')

var i;

Given('I am on the Duckduckgo homepage', async function () {
    await testController
        .navigateTo(homePageElements.url)
});

Then('the duckduckgo logo should be visible', async function () {
    await testController
    .expect(homePageElements.ducklogo.ducklogoverify().visible).ok()

});

When('I search supercalafragalistic', async function () {
    await testController
    .typeText((homePageElements.SearchElement.SearchElementInput()),'supercalafragalistic')
});


Then('I Click on Search Button', async function () {
   await testController
    .hover(homePageElements.Click.ClickSearchButton())

 });


Then ('supercalafragalisticexpialadoshus should appear as the first search criteria',async function () {
    await testController
    .expect(homePageElements.SearchResult.SuperSearchResult().visible).ok();
});

When('I click on the hamburger menu in the top right', async function () {
    await testController
    .click(homePageElements.Hamburger.HamburgerMenuSearch())
});


Then('I expect to see a themes link', async function () {
    await testController
    .expect(homePageElements.HamburgerClick.HamburgerClickExpect().visible).ok()
});


Then('I click on the themes link', async function () {
    await testController
    .click(homePageElements.ThemesLink.ThemesLinkClick())
});


Then('I click on the dark mode theme button', async function () {
    await testController
    .click(homePageElements.DarkMode.DarkModeLink())
});

Then('My page background should change colour', async function () {
    await testController
    .expect(homePageElements.PageBackground.PageBackgroundColour().visible).ok()
});

When('I type super into the search box', async function () {
    await testController
    .typeText(homePageElements.SuperSearch.SuperSearchBox(),'Super')
});

Then('I expect to see exactly 10 suggestions in the typeahead dropdown', async function () {
    for (i= 1; i <= 10; i++) 
    {
        await testController
        .expect(homePageElements.ElementsSearch.ElementsSearch10(i).visible).ok()
        .expect(homePageElements.ElementsSearch.ElementsSearch10(i).innerText).contains('super')
        .expect(homePageElements.ElementsSearch.ElementsSearch10(11).exists).notOk()
    }
    
})






