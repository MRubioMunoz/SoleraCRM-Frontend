import { useState } from "react";
import {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function FormContact(){

        const navigation = useNavigate();
        const {idOportunity} = useParams();
        const[contact, setContact] = useState({
    
            id: 3,
            type:"",
            date:"",
            result:false
    
        })

        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        
        function handleSubmit(evt) {
              evt.preventDefault();
              fetch(`http://localhost:8080/oportunity/${idOportunity}/contact`, {
               method: "POST",
               headers: headers,
               body: JSON.stringify({
                type: contact.type,
                date: contact.date,
                result: contact.result

               }),
              }).then(() => {
               navigation("/opportunity");
              });
             }
    
             function handleChange(evt) {
                  const target = evt.target;
                  const name = target.name;
                  if(target.name === "result"){
                    if(target.value === "on"){
                        target.value = true;
                    } 
                  }
                  
                  const value = target.value;
                  const newContact = {
                   ...contact,
                   [name]: value
                  };
                
                  setContact(newContact);
                 }
                
    
    return(
        <form onSubmit={handleSubmit} >
        <div>
            <h1>Create Contact</h1>
        <div>
              <label for="type">Type </label>
              <input name = "type" type="text" id="type" placeholder="Type"  onChange={handleChange} required/>
          </div>
          <div>
              <label for="pass">Date </label>
              <input name = "date" type="Date" id="date" placeholder="YYYY/MM/DD" onChange={handleChange} required/>
          </div>
          <div>
              <label for="pass">Result </label>
              <input name="result"  type="checkbox" id="result" placeholder="Result" onChange={handleChange}/>
          </div>
        </div>
        <div class="footer">
          <button type="submit" id="submitButton" class="btn">Submit</button>
      </div>
        <div>
        </div>
        
    </form>
    );
}
export default FormContact;