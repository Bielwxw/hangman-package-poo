const prompt = require('prompt-sync') ({sigint: false});

class Menu {
  runMenu() {
    let opt = parseInt(prompt('>>'));

    switch(opt) {
      case 1: return true;
      case 2: return false;
      default: Menu.runMenu();
    }
  }
}

module.exports = Menu;