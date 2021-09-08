# Group 3 Project proposal

## Idea

We are the owner of a barber shop and we need to have a way for the owner to keep track of services offered and provided by employees.

## Initial Work Distribution

- HTML / CSS - Salvador
- Routes - Jim
- Databases / SQL Models / Seeds - Giancarlo

## Features/User Acceptance Criteria

- when the user logs in they are given a menu of functions
  Manage employees
  Manage services available //do this route, get add delete
  Enter Services provided during each day for balancing books

- Managing Employees
  Includes:
  Adding new employee
  Deleting employee
  Updating employee info (nice to have)

- Managing services
  Includes:
  Adding services
  Deleting services
  Updating service price (nice to have)

- Recording services
  Includes:
  Adding services provided
  Employee name (auto filled by authentication)
  Service provided (Selected from menu?)
  Client's name (nice to have)

- Queries/Reports
  Include:
  List of all services provided in a given day/week?
  How many services by employee?
  List of one service provided by day/week?
  List of services by client? (nice to have)

## Database Diagram

Services Table
ID (PK)
Service name
Service Price

Activity Table
ID (PK)
Service ID (foreign key)
User ID (foreign key)
Date (auto-timestamp)
Client ID (foreign key) (nice to have)

User Table
ID (PK)
email
First Name
Last Name
Password (bcrypt)

Client Table (nice to have)
ID (PK)
Client first name
Client last name
Client phone number
Client Table (nice to have)
ID (PK)
Client first name
Client last name
Client phone number

## Page design

### Entry

Start at log in page

- text entry box for email and password and submit button
- also create new user
  email
  first name
  last name
  password

- Home page
  Links or buttons for
