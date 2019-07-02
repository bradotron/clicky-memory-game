# Click-Memory-Game
This app is a memory game. The users attempt to click on all the images once, but after each click the images shuffle. 

[Github](https://github.com/bradotron/clicky-memory-game)
[Deployed App](https://bradotron.github.io/clicky-memory-game/)

# Using the App
To play the game, simply click on an image. For each unique image clicked the score goes up by one. As soon as an image is clicked twice, the game is over. If the user got a high score for this session, the high score is updated. 

# App Organization
The app was created with create-react-app and a couple additions. In the src directory, components are in the components folder, and a utils folder was created to store javascript files. THe default character information is imported with characters.js, and a randomizing helper function is imported with helpers.js.

## Folder Structure
```
|-- projectRoot
    |-- .gitignore
    |-- package.json
    |-- README.md
    |-- yarn.lock
    |-- build
    |   |-- asset-manifest.json
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- manifest.json
    |   |-- precache-manifest.541bd83fd0c5792ef69bfbf089541c8b.js
    |   |-- service-worker.js
    |   |-- images
    |   |   |-- arya.jpg
    |   |   |-- brienne.jpg
    |   |   |-- cersei.jpg
    |   |   |-- daenerys.jpg
    |   |   |-- davos.jpg
    |   |   |-- jamie.jpg
    |   |   |-- jon.jpg
    |   |   |-- jorah.jpg
    |   |   |-- peter.jpg
    |   |   |-- samwell.jpg
    |   |   |-- sansa.jpg
    |   |   |-- tyrion.jpg
    |   |-- static
    |       |-- css
    |       |   |-- main.584f321a.chunk.css
    |       |   |-- main.584f321a.chunk.css.map
    |       |-- js
    |           |-- 2.4e81ba5b.chunk.js
    |           |-- 2.4e81ba5b.chunk.js.map
    |           |-- main.62358a4a.chunk.js
    |           |-- main.62358a4a.chunk.js.map
    |           |-- runtime~main.83671481.js
    |           |-- runtime~main.83671481.js.map
    |-- Instructions
    |   |-- homework_instructions.md
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- manifest.json
    |   |-- images
    |       |-- arya.jpg
    |       |-- brienne.jpg
    |       |-- cersei.jpg
    |       |-- daenerys.jpg
    |       |-- davos.jpg
    |       |-- jamie.jpg
    |       |-- jon.jpg
    |       |-- jorah.jpg
    |       |-- peter.jpg
    |       |-- samwell.jpg
    |       |-- sansa.jpg
    |       |-- tyrion.jpg
    |-- src
        |-- App.css
        |-- App.js
        |-- App.test.js
        |-- index.css
        |-- index.js
        |-- logo.svg
        |-- serviceWorker.js
        |-- components
        |   |-- Banner
        |   |   |-- index.js
        |   |-- Game
        |   |   |-- index.js
        |   |-- GameCard
        |   |   |-- index.js
        |   |-- ScoreBoard
        |       |-- index.js
        |-- utils
            |-- characters.js
            |-- helpers.js
```

