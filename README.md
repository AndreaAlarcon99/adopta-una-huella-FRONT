# Adopta una huella Frontend

Developed as the final project of our web development bootcamp at Ironhack Barcelona. It's a MERN Stack application, check the backend repository [here](https://github.com/AndreaAlarcon99/adopta-una-huella-BACK).

## About

Hi! We are Andrea, Leticia and Nahuel, web developers students. This project is about a web application where you can adopt pets from different foundations. Our main goal is to make easier the process to adopt a pet and also help foundations to promote pet adoptations.

![Project logo.](/public/Huella.png "Project logo.")

## Deployment

You can check the app fully deployed [here](https://adopta-huella.netlify.app/). If you wish to view the API deployment instead, check [here](https://adopta-una-huella.cyclic.app/).

## Work structure

We used [Trello](https://trello.com/b/Qbeckzgi) tool to help us sharing the tasks during the project development.

## Installation guide

- Fork this repo
- Clone this repo

```shell
$ cd adopta-una-huella-FRONT
$ npm install
$ npm start
```

## Routes

| Route                   |      Privacy       | Renders          |
| ----------------------- | :----------------: | ---------------- |
| /                       |     public \*      | HomePage         |
| /signup                 | public (anonimous) | SignupPage       |
| /login                  | public (anonimous) | LoginPage        |
| /informacion-adopcion   |     public \*      | InfoAdoptionPage |
| /adoptados              |     public \*      | AdoptedPets      |
| /animales               |     public \*      | PetListPage      |
| /animales/:animalId     |     public \*      | PetDetailPage    |
| /perfil/:userId         |     public \*      | ProfilePage      |
| /perfil/:userId/editar  | private (user) \*  | EditProfilPage   |
| /animales/:petId/editar | private (user) \*  | EditPet          |
| /crear-animal           | private (user) \*  | AddPet           |
| /protectoras            |     public \*      | ProtectoraPage   |

\*admin

## Components

- Navbar
- AnimalComponent
- AnimalFilters
- DeleteUser
- Protectora
- AnimalForm
- IsAnon
- IsPrivate
- IsLoading
- Footer

---

Any doubts? Contact us!
<br>
<img width="20px" src="https://simpleicons.now.sh/linkedin/495f7e" alt="LinkedIn" />
</br>
<a href="https://www.linkedin.com/in/leticiasantospoveda/">Leticia</a>
<a href="https://www.linkedin.com/in/andreaalarconvaldes/">Andrea</a>
<a href="https://www.linkedin.com/in/angelnahuelciminialvarez/">Nahuel</a>
