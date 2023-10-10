# Social-Network-API

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Technologies used
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MongodDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

-------------------------------------------------------------

## Table of Contents

* [Installation](#installation)

* [Testing](#testing)

* [Usage](#usage)

* [License](#license)

* [Contributions](#contributions)

* [Questions](#questions)

## Installation

To run the application you will need to do the following: 
1. In the terminal
    - run `npm i`
    - run `npm run seed`. Only if you want the sample data.
    - run `npm run start`.  The script runs `node server.js`
4. Now open Insomnia and run the application from there.

## Testing: 

Testing restful API calls with Insomnia Core  

---
**`/api/users`**
* `GET` all users
* `POST` a new user:
    ```json
    // example data
    {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
    }
    ```
---
**`/api/users/:userid`**
* `GET` a single user by its `_id` 
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`
---
**`/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list
---
**`/api/thoughts`** 
* `GET` to get all thoughts
* `POST` to create a new thought
    ```json
    // example data
    {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
    }
    ```
---
**`/api/thoughts/:thoughtId`**
* `GET` to get a single thought by its `_id`
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`
---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction 
    ```json
    // example data
    {
    "reactionBody":"Hell Yeah!!",
    "username":"lernantino"
    }
    ```
---
**`/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` remove a reaction by the `reactionId` 
### Dependencies
```
"express": "^4.17.1",
"moment": "^2.29.4",
"mongodb": "^6.1.0",
"mongoose": "^7.0.2"
```
Moment is used to format the date.

## Usage

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

### Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## License
This application is covered under the MIT License.
[License URL](https://opensource.org/licenses/MIT)

## Contributions

I have GitHub co-pilot installed to help speed up my code and to reduce errors. I also had assistance from a TA.

## Video Of Application
[Link to video of application in use](https://drive.google.com/file/d/1QVi0o8v60cmSe-FkBdnhKz951DTKhoN-/view?usp=sharingI)
Note: the video was edited for length and clarity
## Application URL
[Link to application URL](https://github.com/sthogue/Ecommerce-Back-End)  


## Questions
View more of my work at
[https://github.com/sthogue](https://github.com/sthogue/)

[Professional Profile](https://www.stephenhogue.com)
