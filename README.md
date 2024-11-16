# Basic RESTful User API

A simple Node.js/Express API that serves user data from a JSON file through various endpoints.

## Description

This project implements a basic RESTful API using Node.js and Express to manage user data. The API reads from a local JSON file and provides multiple endpoints to retrieve user information based on different criteria.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [repository-name]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `users.json` file in the root directory with the following content:
```json
{
  "user1": {
    "name": "Alice",
    "password": "pass123",
    "profession": "developer",
    "id": 1
  },
  "user2": {
    "name": "Bob",
    "password": "pass456",
    "profession": "designer",
    "id": 2
  },
  "user3": {
    "name": "Charlie",
    "password": "pass789",
    "profession": "manager",
    "id": 3
  }
}
```

## Running the Application

Start the server:
```bash
node app.js
```

The server will run on `http://localhost:5000`

## API Endpoints

### List All Users
- **URL**: `/users`
- **Method**: `GET`
- **Sample Request**: `GET http://localhost:5000/users`
- **Success Response**: List of all users in JSON format

### Get User by ID
- **URL**: `/users/:id`
- **Method**: `GET`
- **URL Params**: `id=[integer]`
- **Sample Request**: `GET http://localhost:5000/users/1`
- **Success Response**: User details for the specified ID

### Get Users by Profession
- **URL**: `/users/profession/:profession`
- **Method**: `GET`
- **URL Params**: `profession=[string]`
- **Sample Request**: `GET http://localhost:5000/users/profession/developer`
- **Success Response**: List of users with the specified profession

### Get User by Name
- **URL**: `/users/name/:name`
- **Method**: `GET`
- **URL Params**: `name=[string]`
- **Sample Request**: `GET http://localhost:5000/users/name/Alice`
- **Success Response**: User details for the specified name

## Error Handling

The API includes error handling for the following scenarios:
- Accessing non-existent user IDs
- Requesting non-existent professions
- Searching for non-existent names

Error responses will include appropriate status codes and error messages.

## Testing

You can test the API using any REST client (e.g., Postman):

1. Start the server
2. Test each endpoint with various parameters
3. Verify the responses and error handling

Example test cases:
- `GET /users` - Should return all users
- `GET /users/1` - Should return Alice's details
- `GET /users/profession/developer` - Should return all developers
- `GET /users/name/Bob` - Should return Bob's details

## Project Structure

```
├── app.js              # Main application file
├── users.json          # User data
├── package.json        # Project dependencies
└── README.md          # This file
```

## Dependencies

- Express.js - Web application framework
- fs (Node.js built-in) - File system module for reading JSON file

