class Forca {
  constructor() {
    this._estado = 0;
    this._indexSkin = 0;
    this._todasSkins = [];
  }
  getIndexSkin() {
    return this._indexAtual;
  }
  getSkinAtualStr() {
    return this._todasSkins()[this.getIndexSkin()];
  }
  addSkin(array) {
    if (array.length !== 6) {
      console.error("Skin inválida! Só aceitamos skins com 6 estados");
    }
    else {
      this._todasSkins.push(array);
    }
  }
}