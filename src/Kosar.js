
function Kosar(props) {
    // ha már van az adaott elem a kosárban, akkor növeld meg 
    //az adott könyv darabszámát
    //ha még nincs, akkor pedig a db=1

    // + - növeli a darbszámot
    // - csökkenti a darabszámot
    // törlés - törli a kosárból az elemet
    function novel(){
       props.novel(props.kosar) 
    }

    return (
        <tr>
            <td>{props.kosar.szerzo}</td>
            <td>{props.kosar.cim}</td>
            <td>{props.kosar.ar}</td>
            <td>{props.kosar.db}</td>           
            <td><button onClick={novel}>+</button></td>           
            <td><button>-</button></td>           
            <td><button>Töröl</button></td>           
                
        </tr>
    );
}
export default Kosar;