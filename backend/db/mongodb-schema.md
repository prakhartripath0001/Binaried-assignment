# MongoDB Schema Design

Database: `task-manager`

This project uses MongoDB Atlas with Mongoose, so the database design is documented as MongoDB collections instead of a `schema.sql` file.

## users

Stores registered users.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `_id` | ObjectId | Yes | MongoDB document id |
| `name` | String | Yes | Trimmed |
| `email` | String | Yes | Unique, lowercase, trimmed |
| `password` | String | Yes | bcrypt hashed password |
| `createdAt` | Date | Yes | Added by Mongoose timestamps |
| `updatedAt` | Date | Yes | Added by Mongoose timestamps |

Index:

- `email` unique index

## tasks

Stores tasks created by users.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `_id` | ObjectId | Yes | MongoDB document id |
| `title` | String | Yes | Trimmed |
| `description` | String | No | Defaults to empty string |
| `priority` | String | Yes | `Low`, `Medium`, or `High` |
| `status` | String | Yes | `Todo`, `In Progress`, or `Done` |
| `completed` | Boolean | Yes | Defaults to `false` |
| `owner` | ObjectId | Yes | References `users._id` |
| `createdAt` | Date | Yes | Added by Mongoose timestamps |
| `updatedAt` | Date | Yes | Added by Mongoose timestamps |

Relationship:

- One user can have many tasks.
- Each task belongs to one user through `owner`.

Runtime Mongoose models:

- `backend/models/User.js`
- `backend/models/Task.js`
