Feature: Sing Up
  Sing Up Service Test
  Scenario: Sing Up New User
    Given I send a POST request to "/users/singup" with body:
      """
      {
        "id": "ea4f221c-4eb4-486a-b39f-100b67ba9596",
        "username": "ruben.ruiz",
        "email": "ruben.ruiz@mail.x",
        "password": "root"
      }
      """
    Then the response status code should be 201
  Scenario: Sing Up Existing User
    Given I send a POST request to "/users/singup" with body:
      """
      {
        "id": "ea4f221c-4eb4-486a-b39f-100b67ba9596",
        "username": "ruben.ruiz",
        "email": "ruben.ruiz@mail.x",
        "password": "root"
      }
      """
    Then the response status code should be 422