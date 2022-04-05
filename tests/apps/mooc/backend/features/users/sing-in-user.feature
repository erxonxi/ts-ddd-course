Feature: Sing In
  Sing In Service Test
  Scenario: Sing Up New User
    Given I send a POST request to "/users/singin" with body:
      """
      {
        "email": "ruben.ruiz@mail.x",
        "password": "root"
      }
      """
    Then the response status code should be 200
    And the response body equals:
      """
      {
        "token": "token"
      }
      """