@test

Feature: Ducklogo 
	As a Customer
	I want to be able to see the Homepage
	So that I can see the homepage of the ducklogo page

Background:
Given I am on the Duckduckgo homepage

Scenario: Homepage - Verifying the logo
  Then the duckduckgo logo should be visible

Scenario: Homepage - Verifying the word supercalafragalistic
  When I search supercalafragalistic
  And I Click on Search Button
  Then supercalafragalisticexpialadoshus should appear as the first search criteria

Scenario: Homepage - Verifying the Hamburger Menu
  When I click on the hamburger menu in the top right
  Then I expect to see a themes link


Scenario: Homepage - Background Theme Colour Change
 When I click on the hamburger menu in the top right
 Then I click on the themes link 
 Then I click on the dark mode theme button
 Then My page background should change colour


Scenario: Homepage - 10 Searches in the dropdown
When I type super into the search box 
#Then I Click on Search Button
Then I expect to see exactly 10 suggestions in the typeahead dropdown
 
