import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

function Oportunity(){
     const [oportunities, setOportunity] = useState([]);



     useEffect(() => {
        fetch('http://localhost:8080/oportunity')
        .then(response => response.json())
        .then(json => setOportunity(json))
        }, []);


     return (
        <div>
             <h2 className="text-center">opportunities</h2>
             <br></br>
             <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr> 
                                <th> Name</th>
                                <th> Telephone</th>
                                <th> Email</th>
                                <th> Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                oportunities.map(
                                    oportunity => 
                                    <tr key = {oportunity.idOportunity}>
                                         <td > {oportunity.name} </td>   
                                         <td> {oportunity.telephone}</td>
                                         <td> {oportunity.email}</td>
                                         <td> {String(oportunity.client)}</td>  
                                         <td><Link to={`/opportunity/${oportunity.idOportunity}/contact`}><button id={`contactButton${oportunity.idOportunity}`}>Contacts</button></Link></td> 
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <Link to={`/opportunity/form`}><button id="createOportunity">Create Opportunity</button></Link>
             </div>

             

        </div>

        
    )
}

export default Oportunity;