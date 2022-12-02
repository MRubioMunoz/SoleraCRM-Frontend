import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function FormOportunity(){
    const navigation = useNavigate();
    //const {idOportunity} = useParams();
    const[oportunity, setOportunity] = useState({

        name:"",
        telephone:"",
        email:"",
        client:false

    })

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    
    function handleSubmit(evt) {
          evt.preventDefault();
          fetch(`http://localhost:8080/oportunity`, {
           method: "POST",
           headers: headers,
           body: JSON.stringify({
            name: oportunity.name,
            telephone: oportunity.telephone,
            email: oportunity.email,
            client: false

           }),
          }).then(() => {
           navigation("/opportunity");
          });
         }

         function handleChange(evt) {
              const target = evt.target;
              const name = target.name;
                           
              const value = target.value;
              const newOportunity = {
               ...oportunity,
               [name]: value
              };
            
              setOportunity(newOportunity);
             }
            

return(
    <form onSubmit={handleSubmit} >
    <div>
        <h1>Create Oportunity</h1>
    <div>
          <label for="type">Name </label>
          <input name = "name" type="text" id="name" placeholder="Name"  onChange={handleChange} required/>
      </div>
      <div>
          <label for="pass">Telephone </label>
          <input name = "telephone" type="text" id="telephone" placeholder="Telephone" onChange={handleChange} required/>
      </div>
      <div>
          <label for="pass">Email </label>
          <input name = "email" type="text" id="email" placeholder="Email" onChange={handleChange} required/>
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
export default FormOportunity;