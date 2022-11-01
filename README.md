# Adopta una huella Frontend

Developed as the final project of our web development bootcamp at Ironhack Barcelona. It's a MERN Stack application, check the backend repository [here](https://github.com/AndreaAlarcon99/adopta-una-huella-BACK).

## About
Hi! We are Andrea, Leticia and Nahuel, web developers students. This project is about a web application where you can adopt pets from different foundations. Our main goal is to make easier the process to adopt a pet and also help foundations to promote pet adoptations.  

![Project Image](https://....png "Project Image")

## Deployment
You can check the app fully deployed [here](https://herokuapp.com/). If you wish to view the API deployment instead, check [here](https://herokuapp.com/api/).

## Work structure
We used [Trello](https://trello.com/home) tool to help us sharing the tasks during the project development. 

## Installation guide
- Fork this repo
- Clone this repo 

```shell
$ cd adopta-una-huella-FRONT
$ npm install
$ npm start
```

## Routes
| Route                | Privacy         | Renders                  |
| -------------------- | :-------------: | ------------------------ |
| /                    | public          | HomePage                 |
| /signup              | public          | SignupPage               |
| /login               | public          | LoginPage                |
| /about               | public          | ResumePage               |
| /coding-projects     | public          | CodingProjectListPage    |
| /design-projects     | public          | DesignProjectListPage    |
| /coding-projects/:id | public          | CodingProjectDetailsPage |
| /design-projects/:id | public          | DesignProjectDetailsPage |
| /all-orders          | private (admin) | AllOrdersPage            |
| /all-orders/:id      | private (admin) | EditOrderPage            |
| /profile             | private (user)  | UserProfilePage          |

## Components
- AddCodingProject
- AddDesignProject
- AddOrder
- AnonRoute
- CodingProjectCard
- DesignProjectCard
- EditCodingProject
- EditDesignProject
- Navbar
- OrderCard
- PrivateRoute

---

Any doubts? Contact us!

<a href="https://www.linkedin.com/in/leticiasantospoveda/"><img align="right" width="20px" src="https://simpleicons.now.sh/linkedin/495f7e" alt="Leticia's LinkedIn" /></a>
<a href="https://www.linkedin.com/in/andreaalarconvaldes/"><img align="right" width="20px" src="https://simpleicons.now.sh/linkedin/495f7e" alt="Andrea's LinkedIn" /></a>
<a href="https://www.linkedin.com/in/angelnahuelciminialvarez/"><img align="right" width="20px" src="https://simpleicons.now.sh/linkedin/495f7e" alt="Nahuel's LinkedIn" /></a>
