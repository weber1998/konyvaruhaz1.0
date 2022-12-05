import Konyv from "../Konyv";

class KosarModel {
  #kosar = [];
  #db;
  #osszAr;
  #kulonDb;
  constructor(kosaram, db) {
    this.#kosar = kosaram;
    this.#db = db;
    this.#osszAr = 0;
  }
  getKosar() {
    return this.#kosar;
  }
  setKosar(adat) {
    if (!this.#kosar.length) {
      this.#kosar.push(adat);
    } else {
      for (let index = 0; index < this.#kosar.length; index++) {
        if (this.#kosar[index] != adat) {
          this.#kosar.push(adat);
        } else {
          this.#kulonDb++;
          console.log("kulunDb növelése");
        }
      }
    }
  }

  getDb() {
    return this.#kosar.length;
  }
  getOsszar() {
    let ossz = 0;
    this.#kosar.forEach((elem) => {
      ossz += elem.ar;
    });
    this.#osszAr = ossz;
    return ossz;
  }
  setKosarPlusz(adat) {
    console.log("növel a modellben");
    console.log(adat);
    this.#db += 1;
    console.log(this.#db);
    this.setKosar(adat);
  }

  setKosarMinusz(adat) {
    // console.log("csökken a modellben");
    // console.log("adat id-ja: " + adat.id);
    // this.#db -= 1;
    // console.log("enyni db van belőle: " + this.#db);
    // this.#kosar.splice(adat, 1);

    // this.#kosar.forEach(adat => {
    //     console.log(adat.id + ". elem törlésre kerül a " + this.#kosar[0].id + " hosszúságú kosárból");
    //     if(adat.id == this.#kosar.id) {
    //         this.#kosar.splice(adat, 1);
    //         console.log("bent van az if-ben");
    //     }
    // });

    for (var i = 0; i < this.#kosar.length; i++) {
      if (adat.id === this.#kosar[i].id) {
        console.log(adat.id);
        console.log(this.#kosar[i].id);
        this.#kosar.splice(i, 1);
        break;
      }
    }
  }

  setDelete(adat) {
    //this.#kosar.forEach(adat => {
    this.#kosar.splice(adat);
    console.log(
      adat.id +
        ". elem törlésre kerül a " +
        this.#kosar.length +
        " hosszúságú kosárból"
    );
    // });
  }
}
export default KosarModel;
