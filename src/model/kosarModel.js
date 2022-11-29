class KosarModel {
    #kosar =[]
    #db
    #osszAr
    constructor(kosaram){
        this.#kosar=kosaram;
        this.#db=0
        this.#osszAr=0
    }
    getKosar (){
        return this.#kosar;
    }
    setKosar (adat) {
        this.#kosar.push(adat)
    }
    getDb(){
        return this.#kosar.length 
    }
    getOsszar(){
        let ossz=0
        this.#kosar.forEach(elem=>{
            ossz+=elem.ar
        })
        this.#osszAr=ossz
        return ossz
    }
}
export default KosarModel;