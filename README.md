# Vacay Away React App

Vacay Away is a React JS web app that allows users to plan each of their vacation days with activities that display their hours of operation, addresses, and estimated costs. The app allows for flexible, dynamic, and visual engagement and automatically calculates the remaining budget from the original amount the user indicates. 


You can find the corresponding backend project at URL(https://github.com/kotomino/flappy-bernie-backend)

### Preview

![Screen Shot 2021-04-11 at 12 46 33 PM](https://user-images.githubusercontent.com/73256077/114313511-cab41880-9ac4-11eb-9f67-99002db33210.png)


## Installation
### Frontend Directory
1. Clone the project's frontend GitHub Repository in desired directory.
```
$ git clone git@github.com:kotomino/vacay-away-frontend.git
```
2. Run npm install inside the project directory.
``` 
$ npm install
```
3. 
 
### Backend Directory
 1. Clone the backend GitHub Repository in the same parent directory as the frontend.
 ```
 $ git clone git@github.com:kotomino/flappy-bernie-backend.git
 ```
2. Run bundle install inside the project directory.
``` 
$ bundle install
```
3. Run db:create and db:migrate with rails.
```
$ rails db:create
$ rails db:migrate
```

## Usage
1. Run rails s in terminal inside the backend project folder.
```
$ rails s
```
2. Run yarn start OR npm start in terminal inside the frontend project folder.

```
$ yarn start
OR
$ npm start
```