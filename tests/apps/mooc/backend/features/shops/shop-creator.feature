Feature: Shop Creator
  In order to have courses in the platform
  As a user with admin permissions
  I want to create a new course

  Scenario: A valid non existing Shop
    Given I send a PUT request to "/shops" with body:
      """
      {
        "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
        "name": "The Best Shop",
        "description": "asdfsaf"
      }
      """
    Then the response status code should be 201
    And the response should be empty