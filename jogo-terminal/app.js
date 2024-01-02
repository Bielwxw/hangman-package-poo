const prompt = require('prompt-sync') ({sigint: false});
const MenuInicial = require('./src/menuInicial');

let loop = true;
while (loop) {
  loop = MenuInicial.runMenu();
}