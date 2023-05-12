# PokeView

This was my final project for the Software Saturdays 2023 Intermediate ReactJS course. It allows users to view any amount of Pokemon from the Nintendo game franchise and add them to a team of up to six like in the games.

The course covered the basics of web development including HTML, CSS, and Javascript as well as ReactJS and Node.js. It talked about using React to make API requests and how to use the results of those API requests in our own applications. The intermediate track also introduced NoSQL using a Firebase database.

## Feactures
The application starts with an empty team and the first 10 Pokemon in the Pokedex. The user can click the button on the bottom of the screen to display the next 10 Pokemon and can repeat this to display as many Pokemon as they would like. Each Pokemon also has a button that will add it to the user's team. When the user clicks this button, the Pokemon's information will be stored and preserved in a Firebase database and the Pokemon will be displayed as a part of the team at the top of the screen. Pokemon can also be removed from the team using a similar button in the team display. Since the team is stored in a Firebase, it will be preserved even when the app is closed.

## How to Use
Since the application is a Node.js app, it requires Node and its packages to run. Additionally, in the interest of security, I did not post my Firebase file here, so anyone who would like to run this program would need to create their own Firebase project and follow the instructions in the Firebase UI to create the database.js file that is imported in many of the source files.
