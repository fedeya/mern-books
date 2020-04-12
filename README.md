# MERN Books

MERN Books is a application where users upload and download books

## Requirements
Is needed to install this software for exec the project

1. [NodeJS](https://nodejs.org/en/)
2. NPM or [Yarn](https://yarnpkg.com/)
3. [MongoDB](https://www.mongodb.com/)

## [Server](/server)

### API Endpoints

All api endpoints init in /api/ example /api/users

At all endpoints where method is not `POST` `Authorization` is required in the headers, value is the token obtained at the `auth` or `user` `POST` endpoint

| Name        | Description      | Methods              |
|-------------|------------------|----------------------|
| `users`     | user management  | `GET` `POST`         |
| `users/:id` | user management  | `GET` `PUT` `DELETE` |
| `books`     | books management | `GET` `POST`         |
| `books/:id` | books management | `GET` `PUT` `DELETE` |
| `auth`      | login            | `POST`               |

### Schemas

#### `User`
| Name       | Type     | Required | Default     | Unique  |
|------------|----------|----------|-------------|---------|
| `name`     | `String` | `true`   |             | `false` |
| `avatar`   | `String` | `true`   |             | `false` |
| `email`    | `String` | `true`   |             | `true`  |
| `password` | `String` | `true`   |             | `false` |
| `sex`      | `String` | `true`   |             | `false` |
| `role`     | `String` | `false`  | `USER_ROLE` | `false` |

#### `Book`
| Name          | Type       | Required | Ref           |
|---------------|------------|----------|---------------|
| `title`       | `String`   | `true`   |               |
| `description` | `String`   | `true`   |               |
| `img`         | `String`   | `true`   |               |
| `author`      | `ObjectId` | `true`   | [user](#user) |
| `file`        | `String`   | `true`   |               |
| `bookAuthor`  | `String`   | `true`   |               |



### Deployment

```bash
cd server
yarn # or npm install
yarn dev # or npm run dev
```

## Client

> Comming Soon