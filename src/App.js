import './App.css';
import Konyv from './Konyv';
import { useState } from "react";
import Kosar from './Kosar';
import KosarModel from './model/kosarModel';

const konyvTomb = [
  {
    id: 1,
    cim: "Malevil",
    szerzo: "Robert Merle",
    ar: 2111
  },
  {
    id: 2,
    cim: "Védett férfiak",
    szerzo: "Robert Merle",
    ar: 1111
  },
  {
    id: 3,
    cim: "Állati elmék",
    szerzo: "Robert Merle",
    ar: 3111
  },
]

function App() {
  /**state - reprezentálják az oldal állapotát
   * befrissítik az oldal vonatkozó részét
   */
  const [db, setDb] = useState(0);
  const [osszAr, setOsszar] = useState(0);
  const [kosaram, setKosaram] = useState([]);
  //KosarModell osztály példányosítása
  const kosarModel = new KosarModel(kosaram, db)




  function kosarKezeles(adat) {

    kosarModel.setKosar(adat)
    setKosaram(kosarModel.getKosar())
    console.log(kosaram)
    /**Számoljuk meg, hány könyvet tettünk a kosárba */
    setDb(kosarModel.getDb())
    setOsszar(kosarModel.getOsszar())
  }

  function novel(adat) {
    console.log(adat)
    kosarModel.setKosarPlusz(adat);
    //itt kell meghívni a modell megfelelő tagfüggvényét]
   
  }

  function csokken(adat) {
    console.log(adat)
    kosarModel.setKosarMinusz(adat)
 
  }

  function torol(adat) {
    kosarModel.setDelete(adat);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <section>
        <p>A könyvek darabszáma: {db}</p>
        <p>A könyvek ára: {osszAr}</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Szerzők </th>
              <th>Cím</th>
              <th>Ár</th>
              <th>Db</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {kosaram.map((elem, index) => {
              return (
                <Kosar
                  kosar={elem}
                  key={index}
                  //db={db}
                  novel={novel}
                  csokken={csokken}
                  torol={torol}
                />
              );
            })}
          </tbody>
        </table>
      </section>
      <article>
        {
          konyvTomb.map((konyv, index) => {
            return (<Konyv konyvObj={konyv} key={index} kosarKezeles={kosarKezeles} />)
          })}
      </article>
      <footer>
        <p>saját név</p>
      </footer>
    </div>
  );
}

export default App;
