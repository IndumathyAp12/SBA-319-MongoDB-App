Created a server application with Node, Express, and MongoDB for a Online fruit shop.
Created a CRUD API using Express and MongoDB.
Created MongoDB indexes.
Used MongoDB indexing to make efficient queries.
Created MongoDB validation rules.
Used MongoDB validation to ensure data consistency.
Used three different data collections within the database- such as items, orders, users.
Created GET, POST, PATCH and DELETE request .
Included indexes for the item field which is frequently queried.
API Documentation
Items
Get All Items
Endpoint: GET /items
Description: Retrieve a list of all items.
Response:
json

[
  {
    "name": "Apple",
    "quantity": 100,
    "description": "Fresh red apples from the orchard.",
    "_id": "6663a5df2e6ee526bfe7573b",
    "createdAt": "2024-06-08T00:29:19.531Z",
    "updatedAt": "2024-06-08T00:29:19.531Z",
    "__v": 0
  },
  ...
]
Get Item by ID
Endpoint: GET /items/:id
Description: Retrieve a single item by its ID.
Response:
json

{
  "name": "Apple",
  "quantity": 100,
  "description": "Fresh red apples from the orchard.",
  "_id": "6663a5df2e6ee526bfe7573b",
  "createdAt": "2024-06-08T00:29:19.531Z",
  "updatedAt": "2024-06-08T00:29:19.531Z",
  "__v": 0
}
Create Item
Endpoint: POST /items
Description: Create a new item.
Request Body:
json

{
  "name": "Apple",
  "quantity": 100,
  "description": "Fresh red apples from the orchard."
}
Response:
json

{
  "name": "Apple",
  "quantity": 100,
  "description": "Fresh red apples from the orchard.",
  "_id": "6663a5df2e6ee526bfe7573b",
  "createdAt": "2024-06-08T00:29:19.531Z",
  "updatedAt": "2024-06-08T00:29:19.531Z",
  "__v": 0
}
Update Item
Endpoint: PUT /items/:id
Description: Update an existing item by its ID.
Request Body:
json

{
  "name": "Apple",
  "quantity": 120,
  "description": "Fresh red apples from the orchard."
}
Response:
json

{
  "name": "Apple",
  "quantity": 120,
  "description": "Fresh red apples from the orchard.",
  "_id": "6663a5df2e6ee526bfe7573b",
  "createdAt": "2024-06-08T00:29:19.531Z",
  "updatedAt": "2024-06-08T00:29:19.531Z",
  "__v": 0
}
Delete Item
Endpoint: DELETE /items/:id
Description: Delete an item by its ID.
Response:
json

{
  "message": "Item deleted successfully."
}
________________________________________
Users
Get All Users
Endpoint: GET /users
Description: Retrieve a list of all users.
Response:
json

[
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "4yihwfy83",
    "_id": "6663a5df2e6ee526bfe75749",
    "createdAt": "2024-06-08T00:29:19.774Z",
    "updatedAt": "2024-06-08T00:29:19.774Z",
    "__v": 0
  },
  ...
]
Get User by ID
Endpoint: GET /users/:id
Description: Retrieve a single user by their ID.
Response:
json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "4yihwfy83",
  "_id": "6663a5df2e6ee526bfe75749",
  "createdAt": "2024-06-08T00:29:19.774Z",
  "updatedAt": "2024-06-08T00:29:19.774Z",
  "__v": 0
}
Create User
Endpoint: POST /users
Description: Create a new user.
Request Body:
json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "4yihwfy83"
}
Response:
json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "4yihwfy83",
  "_id": "6663a5df2e6ee526bfe75749",
  "createdAt": "2024-06-08T00:29:19.774Z",
  "updatedAt": "2024-06-08T00:29:19.774Z",
  "__v": 0
}
Update User
Endpoint: PUT /users/:id
Description: Update an existing user by their ID.
Request Body:
json

{
  "username": "john_doe",
  "email": "john_new@example.com",
  "password": "newpassword123"
}
Response:
json

{
  "username": "john_doe",
  "email": "john_new@example.com",
  "password": "newpassword123",
  "_id": "6663a5df2e6ee526bfe75749",
  "createdAt": "2024-06-08T00:29:19.774Z",
  "updatedAt": "2024-06-08T00:29:19.774Z",
  "__v": 0
}
Delete User
Endpoint: DELETE /users/:id
Description: Delete a user by their ID.
Response:
json

{
  "message": "User deleted successfully."
}
________________________________________
Orders
Get All Orders
Endpoint: GET /orders
Description: Retrieve a list of all orders.
Response:
json

[
  {
    "userId": "6663a5df2e6ee526bfe75749",
    "items": [ { ... }, { ... } ],
    "total": 50,
    "status": "Pending",
    "_id": "6663a5df2e6ee526bfe75753",
    "createdAt": "2024-06-08T00:29:19.875Z",
    "updatedAt": "2024-06-08T00:29:19.875Z",
    "__v": 0
  },
  ...
]
Get Order by ID
Endpoint: GET /orders/:id
Description: Retrieve a single order by its ID.
Response:
json
{
  "userId": "6663a5df2e6ee526bfe75749",
  "items": [ { ... }, { ... } ],
  "total": 50,
  "status": "Pending",
  "_id": "6663a5df2e6ee526bfe75753",
  "createdAt": "2024-06-08T00:29:19.875Z",
  "updatedAt": "2024-06-08T00:29:19.875Z",
  "__v": 0
}
Create Order
Endpoint: POST /orders
Description: Create a new order.
Request Body:
json

{
  "userId": "6663a5df2e6ee526bfe75749",
  "items": [ { "itemId": "6663a5df2e6ee526bfe7573b", "quantity": 2 }, { "itemId": "6663a5df2e6ee526bfe7573c", "quantity": 3 } ],
  "total": 50,
  "status": "Pending"
}
Response:
json

{
  "userId": "6663a5df2e6ee526bfe75749",
  "items": [ { "itemId": "6663a5df2e6ee526bfe7573b", "quantity": 2 }, { "itemId": "6663a5df2e6ee526bfe7573c", "quantity": 3 } ],
  "total": 50,
  "status": "Pending",
  "_id": "6663a5df2e6ee526bfe75753",
  "createdAt": "2024-06-08T00:29:19.875Z",
  "updatedAt": "2024-06-08T00:29:19.875Z",
  "__v": 0
}
Update Order
Endpoint: PUT /orders/:id
Description: Update an existing order by its ID.
Request Body:
json

{
  "status": "Completed"
}
Response:
json

{
  "userId": "6663a5df2e6ee526bfe75749",
  "items": [ { "itemId": "6663a5df2e6ee526bfe7573b", "quantity": 2 }, { "itemId": "6663a5df2e6ee526bfe7573c", "quantity": 3 } ],
  "total": 50,
  "status": "Completed",
  "_id": "6663a5df2e6ee526bfe75753",
  "createdAt": "2024-06-08T00:29:19.875Z",
  "updatedAt": "2024-06-08T00:29:19.875Z",
  "__v": 0
}
Delete Order
Endpoint: DELETE /orders/:id
Description: Delete an order by its ID.
Response:
json

{
  "message": "Order deleted successfully."
}

