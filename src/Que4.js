import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainScreen from './images/main-screen.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Arrow from './images/arrow.png';
import info from './images/info.svg';
import Reset from './images/reset.svg';
import whiteArrow from './images/whitearrow.png';
import reactants from './images/first-reactants.png';
function Que4() {
  // var FontAwesome = require('react-fontawesome')
  const[ansvalue, setAnsvalue]=useState(101)
  
  const [disabledsubmit, setDisabledsubmit] = useState(false);
  const [disabledinput, setDisabledinput] = useState(false);
  const [alertdisabled, setAlertdisabled] = useState(true);
  const [wrongalert, setWrongalert]= useState(false);
  

  setTimeout(()=>{
    setWrongalert(false);
},13000);
  function wrongalertcancel() {
    setWrongalert(false);
  }

  function submitfun() {
    if(ansvalue==true) {
      setDisabledsubmit(true);
      setDisabledinput(true);
    }
    else 
    {
      setDisabledinput(false);
      setDisabledsubmit(false);
      setWrongalert(true);
    }
  }
  function alertshow() {
    setAlertdisabled(false);
  }
  function reset() {
    setDisabledinput(false)
      setDisabledsubmit(false)
      setAnsvalue(101)
      
    }
  return (
    <>
      <div className="containerr">

        <div className="subcontainer1">
          <div className="equationdiv">
            <span className="chemicalequation">Balanced Chemical Equation</span> <br />
            <span className="equation" > 
            2H<span className="subdiv">2</span> + O<span className="subdiv">2</span>   
            <img src={Arrow}/>
            
            2H<span className="subdiv">2</span>O 
            </span>
            <img className="pictureequation" src={reactants}/> 
          </div>
        </div>
        <div className="subcontainer2">
          <div className="btntop">
          <Link to='/' className="resetbutton">
           
           <img src={Reset}/>Reset
                      </Link>
            <button className="infobutton">
              <img src={info}/>
            </button>
          </div>
          <div className="Questionline">
            on the left is a balanced chemical equation and the available reactants for a reaction.
            Determine which reactant will run out first.
        </div>
        <span className="questionseries">
          Question : 5 of 6
        </span>
        <span className="Questions">
          What is the limiting reactant?
        </span>
        <span className="inputbtn">
          <input type="radio" name="ans" disabled = {disabledinput} onClick={(e) => setAnsvalue(true)}/>
          Hydrogen <br />
          <input type="radio" name="ans" disabled = {disabledinput} onClick={(e) => setAnsvalue(false)}/>
          Oxygen <br />
        </span>
        <button className={(ansvalue==101 || disabledsubmit) ? 'submitans' : 'submitansdisabled' } 
        disabled = {(ansvalue==101 || disabledsubmit) ? true : false} 
        onClick={submitfun}> Submit Answer</button>
        {
            disabledsubmit &&

        
        <Link to='/Que5' className="correctans"> Next <img src={whiteArrow}/> </Link>
        }

      </div>
 
      {

        wrongalert &&
      <div className="alertstart wrong">
        
       <div className="infopage"> <img src={info}/>
    <span>Not quite right. Try Again!
    </span>
    </div>
       <button onClick={wrongalertcancel} className="buttonwrong">X</button>
       </div>
    
}
    </div >
    

      
        </>
    )
}

export default Que4;

// 2H2 + O2 = 2H2O
// AlCl3+3K→Al+3KCl
// Au + 3 LiCl = 1 AuCl3 + 3 Li
// 4Fe+3O2 → 2Fe2O3
// Fe + CuCl2 → FeCl2 + Cu
// 2Ag + Br2 = 2AgBr