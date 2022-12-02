import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Contact(){

    const nav = useNavigate();
    const [contacts, setContact] = useState([]);
    const {idOportunity} = useParams();
    

    useEffect(() => {
        fetch(`http://localhost:8080/oportunity/${idOportunity}/contact`)
        .then(response => response.json())
        .then(json => setContact(json))
        }, []);

        if(!contacts){
            return <h1>Loanding</h1>
        }

        var headers = new Headers();
        headers.append("Content-Type", "application/json");
      
    function handleSubmit(evt) {
          evt.preventDefault();
          fetch(`http://localhost:8080/oportunity/${idOportunity}`, {
           method: "POST",
           headers: headers,
           body: JSON.stringify({
           }),
          }).then(() => {
           nav("/opportunity");
          });
         }

        return (
            <div>
                 <h2 >Contacts</h2>
                 <br></br>
                 <div>
                        <table>
    
                            <thead>
                                <tr> 
                                    <th> Type</th>
                                    <th> Date</th>
                                    <th> Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map(
                                        contact => 
                                        <tr key = {contact.idContact}>
                                             <td> {contact.type} </td>   
                                             <td> {contact.date[2] + "/" +contact.date[1] + "/" + contact.date[0]}</td>
                                             <td> {String(contact.result)}</td>
                                        </tr>
                                    )
                                }
                                <br/><br/>
                                <td><Link to={`/opportunity/${idOportunity}/contact/form`} id="createContact"><button>Create Contact</button></Link></td>
                                
                            </tbody>
                            <br/>
                            <button id="deleteButtonOp" onClick={handleSubmit}>Delete Oportunity</button>
                        </table>
                         
                 </div>                
    
            </div>
    
            
        )
    }
export default Contact;