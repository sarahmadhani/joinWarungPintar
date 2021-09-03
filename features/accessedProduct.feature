Feature: Access a Product
  Background: Open Ebay.com
    Given Go to www.ebay.com

  Scenario: Access a Product via category after applying multiple filters
    When Navigate to Search by category > Electronics > Cell Phones & accessories
    And Cell Phones & Smartphones in the left hand side navigation section
    And I click - More
    And I filter Screen Size
    And I choose screen size 4.0 - 4.4 in
    And I filter Item Location
    And I choose location items at Europe
    And I filter Price
    And I input max price 100000000
    And I click - apply
    Then I see the counting tags are applied that equals with 3
    When I click applied filter button
    And Screen Size: 4.0 - 4.4 in is applied
    And Price: Under $100,000,000.00 is applied
    And Item Location: Europe is applied

  # Scenario: Access a Product via Search
  #   When Type search Macbook in the search bar
  #   And Search category with Computers/Tablets & Networking
  #   Then User is at Macbook product list page
  #   And 1 nth is contain Macbook