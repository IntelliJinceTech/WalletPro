# Todos for Wallet Pro

## High Level 
### What are we trying to solve? 
- With increased complexity and amount of credit cards in the current consumer environment, this app is a solution for managing that bloat. 
- Increased amount of credit cards for the points could provide individuals with different wallet/purse combinations and carries

### What's Next?
- 

## Folder Structure
Tests should be in each folder breakdown
- Pages (one folder for each page, should have a single root file (index.jsx) alongisde all the files that are only applicable to that page)
- Assets (css, svg, etc.)
- Components (shared components like buttons and forms)
- Context (AuthContext, etc.)
- Data (json data)

## What's Included in MVP
- Ability to 
  -  see a dashboard of credit cards
  -  Login with credentials
  -  Add Credit Cards
  -  Scroll through credit card rewards
  -  Delete Credit Cards
  -  Update Credit Cards
  -  
## High Level Todos
- Hook up front end sign in options with backend authentication
- 
### Todos
- User needs to be logged into a session and authenticate 
    - isLoggedIn is currently still false after signing up
    - isAuthenticated is also false
- Setup reset on clicking add on credit card form
- Ensure CRUD requests for mongodb are working properly with the changes made to the model
- Setup API for adding credit cards to a different database (PostgreSQL) with more stable information. Keep mongodb backend for management of credit card points 

### Done
- Authentication
- Main Routes
- Auth Routes
- Credit Card Model 
#### Logic

## 