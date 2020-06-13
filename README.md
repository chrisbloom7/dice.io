# Dice.io

A simple [Node.js](https://nodejs.org) dice roller server.

## Getting started

Install server from NPM :

```shell
$ npm install -g dice.io
```

Run the server (use -h for help) :

```shell
$ diceio -a 127.0.0.1 -p 8080
```

Then open `http://127.0.0.1:8080` in your browser to display demo application.

## About

This project is still under development and __is not__ production ready.

Create a new [issue](https://github.com/tpftg/dice.io/issues) if you wish another javascript dice engine to be added to the project.

## Miro integration

Application server provide a [Web Plugin](docs/miro.md) for the [Miro](https://miro.com) online collaborative whiteboarding platform.

## Credits

This project mainly uses the following dependencies :

* [dice.js](https://github.com/lordnull/dice.js)
* [rpg-dice-roller](https://github.com/GreenImp/rpg-dice-roller) _(server default engine)_
* [rpgdice](https://github.com/Morgul/rpgdice)
* [socket.io](https://github.com/socketio/socket.io)

Dice SVG icon originally made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/).

_"Shake And Roll Dice"_ sound made by __Mike Koenig__ from [sounbible.com](http://soundbible.com/182-Shake-And-Roll-Dice.html). [Creative Commons](https://creativecommons.org/licenses/by/3.0/legalcode).
