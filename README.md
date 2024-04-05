# Social-Mongo

## Description

This API is designed for a social media startup, aiming to handle large volumes of unstructured data with efficiency and scalability. Utilizing a NoSQL database (MongoDB), the API supports a social network's fundamental operations such as managing user profiles, thoughts (posts), and friends.

## Features

- NoSQL Database: MongoDB for flexible data storage.
- Mongoose ODM: For schema definition, data validation, and query building.
- CRUD Operations: Create, read, update, and delete users and thoughts.
- Friend List Management: Add and remove friends from a user's friend list.

## Installation

Before you begin, ensure you have MongoDB installed and running on your local machine.

1. Clone the repository to your local machine:

```
git clone https://github.com/BrandBlood97/Social-Mongo.git
```

   
2. Navigate to the cloned repository directory:

```
cd Social-Mongo
```

3. Install dependencies:

```
npm i
```

## Usage

To start the server and sync the Mongoose models to the MongoDB database, run the following command:

```
npm start
```


After starting the server, you can use an API client like Insomnia to interact with the API endpoints.

### API Endpoints

#### Users

- GET all users: `/api/users`
- GET a single user by ID: `/api/users/:id`
- POST a new user: `/api/users`
- PUT to update a user by ID: `/api/users/:id`
- DELETE a user by ID: `/api/users/:id`

#### Thoughts

- GET all thoughts: `/api/thoughts`
- GET a single thought by ID: `/api/thoughts/:id`
- POST a new thought: `/api/thoughts`
- PUT to update a thought by ID: `/api/thoughts/:id`
- DELETE a thought by ID: `/api/thoughts/:id`

#### Friends

- POST to add a friend to a user: `/api/thoughts/:userId/friends/:friendId`
- DELETE to remove a friend from a user: `/api/thoughts/:userId/friend/:friendId`

## Testing

To test the API routes:

1. Open Insomnia or any other API testing tool.
2. Set the request method to GET, POST, PUT, or DELETE as needed.
3. Enter the desired endpoint URL.
4. For POST and PUT requests, include the necessary JSON payload in the request body.
5. Send the request and observe the response.

Ensure you receive the expected results, such as JSON-formatted data for GET requests, success messages for POST, PUT, and DELETE operations, and updated data in the MongoDB database.

### Walkthrough:
[Click here for the walkthrough video](https://drive.google.com/file/d/1mpjeIg8M4jMxLRafblNJmiyGwggPy95D/view)

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Questions

For any questions or concerns, please open an issue in the repository, and we will aim to address it as soon as possible.

Thank you for considering Social-Mongo for your social media startup's backend needs.
