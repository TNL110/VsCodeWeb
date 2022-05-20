import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPerson] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(email && firstName){
      const person = {
        id: 0,
        firstName, 
        email}
      setPerson((people) => {
        return [...people,person]
      });
      setFirstName('')
      setEmail('')
    } else{

    }
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input type='text' id='firstName' name='firstName' value={firstName}
              onChange = {(e) => setFirstName(e.target.value)}></input>
          </div>
          <div className='form-control'>
            <label htmlFor='Email'>Email : </label>
            <input type='email' id='firstName' name='firstName' value={email}
              onChange = {(e) => setEmail(e.target.value)}></input>
          </div>
          <button type='submit'>add person</button>
        </form>
        {
          people.map((person, index) => {
            const {id, firstName, email} = person
            return (
              <div className='item' key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            )
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
