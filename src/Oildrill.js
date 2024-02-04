import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainScreen from './images/main-screen.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Arrow from './images/arrow.svg';
import info from './images/info.svg';
import Reset from './images/reset.svg';
import whiteArrow from './images/whitearrow.svg';
function Que1() {
  // var FontAwesome = require('react-fontawesome')
  const[ansvalue, setAnsvalue]=useState(101)
  
  const [disabledsubmit, setDisabledsubmit] = useState(false);
  const [disabledinput, setDisabledinput] = useState(false);
  // const [alertdisabled, setAlertdisabled] = useState(true);
  const [wrongalert, setWrongalert]= useState(false);
  

  
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
  // function alertshow() {
  //   setAlertdisabled(false);
  // }
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
            Li + AuCl
            <span className="subdiv">2</span>  
            <img src={Arrow}/>
            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}

            {/* <FontAwesomeIcon icon='faArrowRight' /> */}
           
            Au + LiCl 
            </span>
            <div className="pictureequation"> This is the picture </div>
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
          Question : 1 of 6
        </span>
        <span className="Questions">
          What is the limiting reactant?
        </span>
        <span className="inputbtn">
          <input type="radio" name="ans" disabled = {disabledinput} onClick={(e) => setAnsvalue(true)}/>
          Iron <br />
          <input type="radio" name="ans" disabled = {disabledinput} onClick={(e) => setAnsvalue(false)}/>
          Oxygen <br />
        </span>
        <button className="submitans" disabled = {(ansvalue==101 || disabledsubmit) ? true : false} onClick={submitfun}> Submit Answer</button>
        {
            disabledsubmit &&

        
        <Link to='/oildrill' className="correctans"> Next <img src={whiteArrow}/> </Link>
        }

      </div>
      {/* {

        alertdisabled &&
      <div className="alertstart">
        <div className="contentalert">
       <div className="infopage"> <img src={info}/>
    <span>The law of conservation of mass states that mass within a closed system remains 
    the same over time. Discover more about the law of conservation of mass, 
    including its importance, equations, and some examples of this law in action.
    Discover more about the law of conservation of mass, 
    including its importance, equations, and some examples of this law in action.
    </span>
    </div>
       <button onClick={alertshow} className="buttonstart"> start</button>
       </div>
    </div>
} */}
    {/* {

        alertdisabled &&
      <div className="alertstart">
        <div className="contentalert">
       <div className="infopage"> <img src={info}/>
    <span>The law of conservation of mass states that mass within a closed system remains 
    the same over time. Discover more about the law of conservation of mass, 
    including its importance, equations, and some examples of this law in action.
    Discover more about the law of conservation of mass, 
    including its importance, equations, and some examples of this law in action.
    </span>
    </div>
       <button onClick={alertshow} className="buttonstart"> start</button>
       </div>
    </div>
} */}
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

export default Que1;