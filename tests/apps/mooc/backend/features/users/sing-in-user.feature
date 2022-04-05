Feature: Sing In
  Sing In Service Test
  Scenario: Sing Up New User
    Given I send a POST request to "/users/singup" with body:
      """
      {
        "id": "ea4f221c-4eb4-486a-b39f-100b67ba9596",
        "username": "test01",
        "email": "test01@mail.x",
        "password": "root_test01"
      }
      """
    Then the response status code should be 201

  Scenario: Sing In
    Given I send a POST request to "/users/singin" with body:
      """
      {
        "email": "test01@mail.x",
        "password": "root_test01"
      }
      """
    Then the response status code should be 200
    And the response body equals:
      """
      {
        "token": "token"
      }
      """