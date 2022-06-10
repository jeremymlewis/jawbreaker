# Jawbreaker Game (AmericanJeremy.com)

This project contains code for a web-application game published on jawbreaker.americanjeremy.com. Makes use of Angular CLI version 12.2.5.

The game is a simple 'clicker' game where a user clicks repeatedly on an image of a jawbreaker in order to break through multiple layers and win a prize for reaching the center of the candy.

Candies are split into 5 rarities, and on the begining of each round a user randomly recieves a candy. Some candies are more common than others (40%, 30%, 15%, 8% and 7% being the probability that a certain candy is chosen.)  Each candy class gives out 5 prizes, each with a 20% chance of being selected each round.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.  

By default the dist folder was excluded from git storage in hte default .gitignore file, but was published here to make export to a web server easier to do.

Copyright (c) 2022 Jeremy Lewis.
