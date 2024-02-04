import videoMain from './images/oil_drilling.mp4';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import videoMain1   from './images/artificial_reef.mp4';
import './Oildrill.css';

function Overfishing(){

    const [paraDisabled, setParaDisabled]= useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [pagechange, setPagechange]=useState('100');
    const [continuebtn, setContinuebtn]=useState('3');
    const[paraDisabledinput, setParaDisabledinput]=useState(true)
    const[submitdisable, setSubmitdisable]=useState(true)
    // function submitAnswer(){
    //     setParaDisabled(false);
    //     console.log('hlo')
    // }
    

    setTimeout(()=>{
        setParaDisabledinput(false);
    },11000);

      console.log(pagechange)
    function submitAns(){
        setParaDisabled('3')
        setParaDisabledinput(true)
        setSubmitdisable(true)
        if(selectedOption=='Positive')
        {
            // alert('Correct Answer')
            setPagechange(101)
            setContinuebtn('1')
            setTimeout(()=>{
        setPagechange(100);
    },3000);
        }
        else {
            // alert('incorrect answer')
            setPagechange(99)
            setContinuebtn('2')
            setTimeout(()=>{
        setPagechange(100);
    },3000);
        }

    }
    function inputChanger() {
        setSubmitdisable(false)
    }
    
    
    return(
    <> 
    <div className="container">
        <div className="videodiv">
           <video autoPlay > 
            <source src={videoMain}/>
           </video>
        
            <p className='oil-para'>since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
            <div className='guessAnswer'>
                  <div><input 
                    type="radio" 
                    onChange={(e) => setSelectedOption('Positive')}
                    onClick = {inputChanger}
                    name="choice" 
                    className='input-choice' 
                    disabled={paraDisabledinput}/> 
                    Positive modification </div>
                    <div> <input 
                onChange={(e) => setSelectedOption('Negative')}
                onClick = {inputChanger}
                type="radio" 
                name="choice" 
                className='input-choice' 
                disabled={paraDisabledinput}/>
                Negative modification
                </div>
            </div>
            <div className='oilSubmitBtn'>
                <button className={submitdisable ? 'submitBtndis' : 'submitBtn'} disabled={submitdisable ? true : false} onClick={submitAns}>Submit Answer</button>
               
               { 
               continuebtn == '1'  &&
                
                
                
                    <Link className="continueBtn linkbutton" to = "/" > Passed </Link>
                                  }
                { 
               continuebtn == '2'  &&
                
                
                
                    <Link className="continueBtn tryagain" to = "/" >  TryAgain </Link>
                 
                }
                </div>
            
        </div>
        <div> 
            {
                pagechange < 100 && 
               

                <div className="alertmenu wrong"> 
                    No This is Not Correct Try Again!                
                    </div>                
                
                }
            {
                pagechange > 100 && 
                <div className="alertmenu correct"> 
                    Good! The Answer is Correct                
                    </div>                
            }
        </div>
        </div>
        </>
    )
}
export default Overfishing;
