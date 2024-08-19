import { useState } from 'react';
import './App.css'

function App() {
  const [formdata,setformdata]=useState({
    firstname:"",
    lastname:"",
    email:"",
    message:"",
    gender:"",
    ruleAcceptance:false,
  });

  function OnhandleSbmit(event){//to lack the refresh automatice
 event.preventDefault();
  console.log(formdata)
  }

 function OnHandleChange(event){
const key = event.target.name;//lastname,firstname
var value = event.target.value;// the vaule inside the input field 
if (event.target.type =='checkbox') {
    value= event.target.checked;
} 
setformdata({
  ...formdata,
  [key]:value //denamic key 
})
 }
  return (
    <>
<form onSubmit={OnhandleSbmit} id='main'>
  <div id="header"><h1 >Contact US</h1></div>
  <div id="twoname">
    <div>
    <label htmlFor='firstname'>FirstName *</label>
  <input id='firstname' className='inputshap'
   value={formdata.firstname}
   name='firstname'
    onChange={OnHandleChange}
    required></input>
</div>
<div>
  <label htmlFor='lastname'>LastName *</label>
  <input id='lastname' className='inputshap' name='lastname'
  value={formdata.lastname}
   onChange={OnHandleChange}
   required></input>
</div>
  </div>
  
<div id='emailDIv'><label htmlFor='email'>Email *</label>
<br></br>
  <input id='email' 
  value={formdata.email}
  name='email'
  className='inputshap'
   onChange={OnHandleChange}
   required></input>
   </div>
  
<div id='radiocheck'>
<label>Query type *</label>
<br></br>
<div id='tworadio'>
  <div className='radioInput'>
  <input type='radio' name="gender" value="male" onChange={OnHandleChange} ></input>
  <label>General Enquiry</label>
 
  </div>
  <div className='radioInput'>
  <input type='radio' name="gender"value="female" onChange={OnHandleChange}></input>
  <label>Support Request</label>
 
  </div>
  </div>
</div>

  <div id='messageDiv'>
  <label htmlFor='message'>Message *</label>
  <textarea id='message'
  value={formdata.message}
  name='message'
  onChange={OnHandleChange}
  >Message</textarea>
  </div>

 
  <div id='submitcheck'>
  <input type='checkbox' name='ruleAcceptance' onChange={OnHandleChange}></input>
  <label htmlFor='ruleAcceptance'>Please chaeck Our rules</label>
  </div>

  <div id='submitDiv'>
  <button   id='subbtn'disabled={!formdata.ruleAcceptance}>Submite</button>
  </div>
 
</form>
    </>
  )
}

export default App
