Feature: Performing a search on Bootstrap Introduction Page

As a user on the Bootstrap Introduction Page
I want to search for a component
Because I want to learn more about it

  Background: 
    Given I am on Bootstrap Examples page
  
  Scenario: Performing a search
     When I decide to search for "Forms"
     Then The content title should be "Forms"
