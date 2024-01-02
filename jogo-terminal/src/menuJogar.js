const prompt = require('prompt-sync') ({sigint: false});
const Menu = require('./menu');
const Jogo = require('./jogo');

class MenuJogar extends Menu {
  runMenu() {
    console.log(
    '\n'+
    'Dificuldade'+
    '-----------------'+
    '1- Normal\n'+
    '2- Difícil\n'+
    '3- Voltar'
    );
    let opt = parseInt(prompt('>>'));

    switch(opt) {
      case 1:
        Jogo.run(1);
        break;
      case 2:
        Jogo.run(2);
        break;
      case 3:
        break;
      default:
        console.log('Opção Inválida!');
        MenuJogar.runMenu();
    }
  }
}

module.exports = MenuJogar;