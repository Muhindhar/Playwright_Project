@Muhindhar
Feature: Muhindhar_21-08-2026_Login to the LambdaTest Playground website

Feature Description:
              As a user, I want to login to the site with different credentials

        Background:
            Given user is on the LambdaTest site

        Scenario Outline: Login to the LambdaTest site with different credentials
              And user navigates to the My Account link
              And user clicks on the Login link
              And user enters the email "<email>"
              And user enters the password "<password>"
             When user clicks on the Login button
             Then user should receive the "<result>"

        Examples:
                  | email              | password   | result  |
                  | demo2701@gmail.com | 1234567890 | success |
                  |                    | 1234567890 | error   |
                  | demo2701@gmail.com |            | error   |
                  |                    |            | error   |
                  | invalid@gmail.com  | 1234567890 | error   |