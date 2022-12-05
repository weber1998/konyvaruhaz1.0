
function Kosar(props) {
    // ha már van az adaott elem a kosárban, akkor növeld meg 
    //az adott könyv darabszámát
    //ha még nincs, akkor pedig a db=1

    // + - növeli a darbszámot
    // - csökkenti a darabszámot
    // törlés - törli a kosárból az elemet
    function novel(){
       props.novel(props.kosar) 
       console.log("növel")
    }

    function csokken() {
        props.csokken(props.kosar)
        console.log("csökken")
    }

    function torol() {
        props.torol(props.kosar)
        console.log("töröl");
    }

    return (
        <tr>
            <td>{props.kosar.szerzo}</td>
            <td>{props.kosar.cim}</td>
            <td>{props.kosar.ar}</td>
            <td>{props.kosar.db}</td>           
            <td><button onClick={novel}>+</button></td>           
            <td><button onClick={csokken}>-</button></td>           
            <td><button onClick={torol}>Töröl</button></td>           
        </tr>
    );
}
export default Kosar;