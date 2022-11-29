import './Konyv.css';



function Konyv(props) {
    function kosarKezeles(){
      
        //App js kosárkezelésének hívása
        props.kosarKezeles(props.konyvObj);
    }

  return (
    <div className="konyv" >          
        <h3>{props.konyvObj.szerzo}</h3>
        <p>{props.konyvObj.cim}</p>
        <p>{props.konyvObj.ar}</p> 
        {/**Konyv komponenes kosárkezelésének hívása */}
        <button onClick={kosarKezeles}>Kosárba</button>    
    </div>
  );
}

export default Konyv;
