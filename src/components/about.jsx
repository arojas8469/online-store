import { useState } from 'react';
import './about.css';

function About() {
    const [showEmail, setShowEmail] = useState(false);


function showInfo(){
    setShowEmail(true);
}

    turn (
        <div className="about">
            <h1>Anthony Rojas</h1>

            { showEmail
            ? <h5>anthony.rojas099@gmail.com</h5> 
            : <p>Click the button below to see my email address.</p> 
            }
            
            <button classname='btn btn-outline-dark' onClick={showInfo}>Show my email</button>
        
        </div>
    );
}




export default About; 