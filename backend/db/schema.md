# Database Schema

MongoDB database: `task-manager`

## Collections

### users

Stores registered application users.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `_id` | ObjectId | Yes | MongoDB document id |
| `name` | String | Yes | Trimmed |
| `email` | String | Yes | Unique, lowercase, trimmed |
| `password` | String | Yes | bcrypt hashed password |
| `createdAt` | Date | Yes | Added by Mongoose timestamps |
| `updatedAt` | Date | Yes | Added by Mongoose timestamps |

Indexes:

- `email` unique index

### tasks

Stores tasks owned by users.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `_id` | ObjectId | Yes | MongoDB document id |
| `title` | String | Yes | Trimmed |
| `description` | String | No | Defaults to empty string, trimmed |
| `completed` | Boolean | Yes | Defaults to `false` |
| `owner` | ObjectId | Yes | References `users._id` |
| `createdAt` | Date | Yes | Added by Mongoose timestamps |
| `updatedAt` | Date | Yes | Added by Mongoose timestamps |

Relationships:

- One user can have many tasks.
- Each task belongs to one user through `owner`.

## Mongoose Models

Runtime Mongoose models live in:

- `backend/models/User.js`
- `backend/models/Task.js`
