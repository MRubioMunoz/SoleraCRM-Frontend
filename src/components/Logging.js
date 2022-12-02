import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Logging(){

        const nav = useNavigate();
        const [inpEmail, setInputEmail]=useState("");
        const [inpPass,setInputPass]=useState("");
        const email = "solera@solera.com";
        const pass = "bootcamp4";
        
        function validate() {
            if (inpEmail === email && inpPass === pass) 
                nav("/opportunity")
        }
        

    return(
        <form onSubmit={validate} >
            <div>
                <h1>Logging</h1>
            <div>
                  <label for="user">User </label>
                  <input type="text" id="user" placeholder="User" value={inpEmail} onChange={e =>setInputEmail(e.target.value)}/>
              </div>
              <div>
                  <label for="pass">Pass </label>
                  <input  type="password" name="" id="pass" placeholder="Pass" value={inpPass} onChange={e =>setInputPass(e.target.value)}/>
              </div>
            </div>
            <div class="footer">
              <button type="submit" id="sub" class="btn">Submit</button>
          </div>
            <div>
            </div>
            
        </form>
        
    );
}

export default Logging;