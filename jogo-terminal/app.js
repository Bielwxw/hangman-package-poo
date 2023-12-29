const prompt = require('prompt-sync') ({sigint: false})
const json = require('./skinForca.json')

opt = 0
while (true) {
  opt = prompt('>> ');
  if (opt === '7') break;

  const skin = json[`skin${opt}`];
  for (const key in skin) {
    console.log(skin[key])
  }
}