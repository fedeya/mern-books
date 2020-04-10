# MERN Books

Full Stack Web Application using MERN Stack

## Requirements
Is needed to install this software for exec the project

1. [NodeJS](https://nodejs.org/en/)
2. NPM or [Yarn](https://yarnpkg.com/)
3. [MongoDB](https://www.mongodb.com/)

## [Server](/server)

### Routes API

| Name        | Description    | Methods              |
|-------------|----------------|----------------------|
| `users`     | user managment | `GET` `POST`         |
| `users/:id` | user managment | `GET` `PUT` `DELETE` |

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