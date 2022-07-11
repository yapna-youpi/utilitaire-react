import React,{useState} from 'react'

import './calco.css'

function Calco() {

    const [val,setVal] = useState("");
    const backSpace = ()=>{
        try {
            setVal(val.slice(0,-1));
        } catch (error) {
            setVal("");
        }
    }
    const calculate = ()=>{
        try {
            setVal(eval(val));
        } catch (error) {
            setVal('ERROR');
        }
    }
  return (
    <div>
      <div id="containeur ">
            <div className="ligne">
                <div className="calco">
                    <div className="ecran">
                        <div className="ecran_haut"><input onChange={e=>setVal(e.target.value)} className='inpu' type="text" defaultValue={val}/></div>
                        <div className="ecran_bas"></div>
                    </div>
                    <div className="lig1">
                        <button className="col1" id="reset" value="c" onClick={()=>backSpace()}>C / CE</button><button className="col1" id="slach" value="/" onClick={(e)=> setVal(val + e.target.value)}>/</button><button className="col1" id="etoil" value="*" onClick={(e)=> setVal(val + " " + e.target.value + " ")}>*</button>
                    </div>
                    <div className="corps">
                        <div className="colone1">
                            <div className="lig1">
                                <button className="col1" value="9" onClick={(e)=> setVal(val + e.target.value)}>9</button><button className="col1" value="8" onClick={(e)=> setVal(val + e.target.value)}>8</button><button className="col1" value="7" onClick={(e)=> setVal(val + e.target.value)}>7</button>
                            </div>
                            <div className="lig1">
                                <button className="col1" value="6" onClick={(e)=> setVal(val + e.target.value)}>6</button><button className="col1" value="5" onClick={(e)=> setVal(val + e.target.value)}>5</button><button className="col1" value="6" onClick={(e)=> setVal(val + e.target.value)}>4</button>
                            </div>
                            <div className="lig1">
                                <button className="col1" value="3" onClick={(e)=> setVal(val + e.target.value)}>3</button><button onClick={(e)=> setVal(val + e.target.value)} className="col1" value="2">2</button><button onClick={(e)=> setVal(val + e.target.value)} className="col1" value="1">1</button>
                            </div>
                            <div className="lig1">
                                <button className="col1" value="0" onClick={(e)=> setVal(val + e.target.value)}>0</button><button className="col1" value="00" onClick={(e)=> setVal(val + e.target.value)}>00</button><button className="col1">.</button>
                            </div>
                        </div>
                        <div className="colone2">
                            <button className="col2" id="moin" value="-" onClick={(e)=> setVal(val + " " + e.target.value + " ")}>-</button>
                            <button className="col2" id="plus" value="+" onClick={(e)=> setVal(val + " " + e.target.value + " ")}>+</button>
                            <button className="col2" id="egal" value="=" onClick={()=> calculate()}>=</button>
                        </div>   
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Calco;