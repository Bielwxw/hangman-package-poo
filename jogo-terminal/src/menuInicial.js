const prompt = require('prompt-sync') ({sigint: false});
const Menu = require('./menu');
const MenuJogar = require('./menuJogar');
const MenuConfig = require('./menuConfig');

class MenuInicial extends Menu {
  runMenu() {
    console.log(
    '\n'+
    'Menu Inicial'+
    '-----------------'+
    '1- Jogar\n'+
    '2- Configurações\n'+
    '3- Sair\n'
    );
    let opt = parseInt(prompt('>>'));

    switch(opt) {
      case 1:
        MenuJogar.runMenu();
        break;

      case 2:
        MenuConfig.runMenu();
        break;

      case 3:
        return false;

      default:
        console.log('Opção Inválida!');
        // MenuInicial.runMenu();
    }
    return true;
  }
}

module.exports = MenuInicial;