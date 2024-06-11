# Welcome to the backend nüli test app

For full instructions on what we'd like you to do please visit our [official developer test page](https://www.notion.so/nuliapp/Nuli-Mid-Level-Mobile-Developer-Test-83f53a4746824e4a8f924b8b9fc13d69#27bb0550be78474f830cfa65d552822d)

## Installation

```bash
$ npm install
```

## Running the app

Create a file named `docker-compose.db.yml` at the project root with the following contents:

```yml
version: '4.25.2'

services:
  postgres:
    container_name: postgres
    image: postgres:15.1
    environment:
      POSTGRES_USER: 'your_user'
      POSTGRES_PASSWORD: 'your_pw'
      POSTGRES_DB: 'your_db'
      PGDATA: /data/postgres
    ports:
      - '5432:5432'
    restart: unless-stopped
```

Create a .env file at the project root with the following, with information that matches the postgres connection information above:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_user
DB_PASSWORD=your_pw
DB_DATABASE=your_db
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Set up database and seeds

```bash
$ docker-compose -f docker-compose.db.yml up -d

$ npm run typeorm migration:run -- -d ./src/ormconfig.ts 

$ npm run db:seed  
```

## Common Commands And Instructions For Creating New Entities

After completing changes to a *.entity.ts file, run:
`npm run typeorm migration:generate -- -d ./src/ormconfig.ts MigrationName`

After a migration is completed, drag to the `src/db/migrations` folder and run:
`npm run typeorm migration:run -- -d ./src/ormconfig.ts`

## API Documentation

You can find the queries and mutations that are used in the demo in the other project linked here: [] in the `app/queries/workout.ts` file.

### Queries

Get a single workout:

Query:
```gql
  workout(
    id: Int!
  ): Workout!
  type Workout {
    id: Int!
    trainerName: String
    duration: Int
    instructions: String
    bodyFocus: [String!]!
    blocks: [Block!]!
  }

  // Argument
  id: Int!
```

Example Query
```gql
query {
  workout(id: 1) {
    id
    bodyFocus
    trainerName
    blocks {
      id
      section
      setCount
     	blockExercises {
        exerciseId
        repBase
        repMax
        durationBase
        durationMax
        weight
        swappedForBlockExerciseId
        exercise {
          name
          muscleGroups
        }
      }
    }
  }
}
```

Response to Example Query
```json
{
  "data": {
    "workout": {
      "id": 1,
      "bodyFocus": [
        "Full Body"
      ],
      "trainerName": "Candice",
      "blocks": [
        {
          "id": 1,
          "section": "warmup",
          "setCount": 2,
          "blockExercises": [
            {
              "exerciseId": 16,
              "repBase": 6,
              "repMax": 8,
              "durationBase": null,
              "durationMax": null,
              "weight": 5,
              "swappedForBlockExerciseId": null,
              "exercise": {
                "name": "Barbell Lunge (L)",
                "muscleGroups": [
                  "Glutes"
                ]
              }
            },
            {
              "exerciseId": 17,
              "repBase": 6,
              "repMax": 8,
              "durationBase": null,
              "durationMax": null,
              "weight": 5,
              "swappedForBlockExerciseId": null,
              "exercise": {
                "name": "Barbell Lunge (R)",
                "muscleGroups": [
                  "Glutes"
                ]
              }
            }
          ]
        },
        {
          "id": 2,
          "section": "warmup",
          "setCount": 2,
          "blockExercises": [
            {
              "exerciseId": 18,
              "repBase": 10,
              "repMax": null,
              "durationBase": null,
              "durationMax": null,
              "weight": 45,
              "swappedForBlockExerciseId": null,
              "exercise": {
                "name": "Sumo Deadlift",
                "muscleGroups": [
                  "Quads"
                ]
              }
            }
          ]
        },
        ...
      ]
    }
  }
}
```


### Mutation

Replace (Swap) An Exercise

```gql
replaceExercise(
input: ReplaceExerciseInput!
): Workout!

// Type Details
type Workout {
  id: Int!
  trainerName: String
  duration: Int
  instructions: String
  bodyFocus: [String!]!
  blocks: [Block!]!
}

// Input
input: ReplaceExerciseInput!

// Input Details
type ReplaceExerciseInput {
  workoutId: Int!
  blockExerciseId: Int!
  fromBlockId: Int!
  fromOrder: Int!
  swappedForBlockExerciseId: Int
}

// Example Mutation
mutation {
  replaceExercise (input: {
    workoutId: 1, 
    blockExerciseId: 7, 
    fromBlockId: 5, 
    fromOrder: 0, 
    }) {
    blocks {
      blockExercises {
        exercise {
          name
        }
        swappedForBlockExerciseId
        durationBase
      }
    }
  }
}
```
Example Mutation Response Data

```json
{
  "data": {
    "replaceExercise": {
      "blocks": [
        {
          "blockExercises": [
            {
              "exercise": {
                "name": "Barbell Lunge (L)"
              },
              "swappedForBlockExerciseId": null,
              "durationBase": null
            },
            {
              "exercise": {
                "name": "Barbell Lunge (R)"
              },
              "swappedForBlockExerciseId": null,
              "durationBase": null
            }
          ]
        },
        {
          "blockExercises": [
            {
              "exercise": {
                "name": "Sumo Deadlift"
              },
              "swappedForBlockExerciseId": null,
              "durationBase": null
            }
          ]
        },
        {
          "blockExercises": [
            {
              "exercise": {
                "name": "Cable Kickback (L)"
              },
              "swappedForBlockExerciseId": null,
              "durationBase": null
            },
            {
              "exercise": {
                "name": "Cable Kickback (R)"
              },
              "swappedForBlockExerciseId": null,
              "durationBase": null
            }
          ]
        },
        ...
         {
          "blockExercises": [
            {
              "exercise": {
                "name": "Plank With Stability Ball"
              },
              "swappedForBlockExerciseId": 7,
              "durationBase": 20
            }
          ]
         }
      ]
    }
  }
}
```
