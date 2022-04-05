Feature: Create a new course
  In order to have courses in the platform
  As a user with admin permissions
  I want to create a new course

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