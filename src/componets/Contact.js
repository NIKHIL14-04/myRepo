import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [first, setfirst] = useState({
    FullName:"",
    PhoneNumber:"",
    Emailadderss:"",
    Message:""
  })
  const InputEvent=(event)=>{
         const {name,value} =event.target;
         
         setfirst((preval)=>{
           return{
             [name]:value,
            
           }
         })
  }

  const formSubmit=(e)=>{
  e.preventDefault();
  alert(`this is my name ${first.name}and my emaili ${first.email} my number is${first.number} my password is ${first.Message}`)            
  }
  return (
    <>
      <div className='container my-5'>
        <div className='row'>
          <h1 className='text-center'>Contact-Us</h1>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full-Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your - Name"
                name='name' 
                  value={first.FullName}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone-Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your - Phone Number" 
                   name='number' 
                  value={first.PhoneNumber}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email-adderss</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your - Email" 
                   name='email' 
                  value={first.Emailadderss}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                 name='message' 
                  value={first.Message}
                  onChange={InputEvent}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>

            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default Contact
