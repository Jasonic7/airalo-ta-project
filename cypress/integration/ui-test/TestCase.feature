Feature: Airalo UI test case

    Scenario: Test case 1
    Given the user is at Airalo's homepage
    And the user types 'Japan' in the search field
    And the user selects 'Japan' option as destination
    And the available Local eSIMs are shown for 'Japan'
    When the user clicks 'Buy Now' button for the fist eSIM package
    Then a popup appers with the following package details:
        | Title    | Moshi Moshi|
        | COVERAGE | Japan      |
        | DATA     | 1 GB       |
        | VALIDITY | 7 Days     |
        | PRICE    | $4.50 USD  |

