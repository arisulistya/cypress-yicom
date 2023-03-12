# cypress-yicom
Sample automated test scenario for AUTH feature

* I'm using the cypress framework to create End-to-End automated tests, this project's design pattern uses POM (Page Object Model) and fixtures to run data-driven tests.

* This is the test scenario :
  1. Login using valid email and password
  2. Login using wrong/invalid email and password
  3. Send forgot password request using valid email
  4. Send forgot password request using wrong/invalid email
  5. Make sure back button on forgot password work correctly
  6. assertion when access login page and forgot password page
  7. SignUp and change language area is still in-progress

* I'm using fixtures to handle the data-driven test with json file format. If you want to use dynamic data such as random value on the data test, we can use javascript package/library like java utils or some package/library that can be able to generate random data, makes some method to generate the data and store/update it to the json file on the fixtures folder, currently i'm not including that in this project.

* To integrate the existing cypress UI automation, First i need to know what design pattern of the existing cypress project. If the design pattern is the same as mine (POM), we can just add some typescript rules and create a documentation for that to make our code readable for everyone on the team. I the design pattern is different, let say the exisiting project use APP-Actions pattern. Then we can choose one design pattern by comparing the pros and cons that suitable for out web project, or we can use both of the design pattern based on the advantage of the design, but it's must be confusing and need lot of documentation for guide.
