import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
  if (action.type === 'ADD') {
    const newPeople = [...state.people, action.person]
    return {
      ...state, 
      people: newPeople, 
      isModalOpen: true, 
      modalContent: 'item added'
    }
  }
  if (action.type === 'NO_VALUE'){
    return{
      ...state, 
      isModalOpen: true, 
      modalContent: 'please enter value'
    }
  }
  if (action.type === 'DELETE_ITEM'){
    const newPeople = state.people.filter((person)=> person.id!==action.payload)
    return{
      ...state, 
      people: newPeople, 
      isModalOpen: true, 
      modalContent: 'item deleted'
    }
  }
  if (action.type === 'CLOSE_MODAL'){
    return{
      ...state,
      isModalOpen: false
    }
  }
  return state
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
}

const Index = () => {
  const [name, setName] = useState('');
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(true);
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // setShowModal(true)
      // setPeople([...people,{id: new Date().getTime.toString(), name}])
      // setName('')
      const newPerson = {id: new Date().getTime().toString(), name}
      dispatch({ type: 'ADD' , person: newPerson})
      setName('')
    } else {
      // setShowModal(false)
      dispatch({type: 'NO_VALUE'})
    }
  }

  const closeModal = () =>{
    dispatch({type: 'CLOSE_MODAL'})
  }

  return (
    <>
      {/* {showModal && <Modal/>} */}
      {state.isModalOpen && <Modal closeModal={closeModal()} modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
          <button type='submit'>add</button>
        </div>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button onClick={() => dispatch({type: 'DELETE_ITEM', payload: person.id})}>remove</button>
          </div>
        )
      })}
    </>
  )
  // return <h2>useReducer</h2>;
};

export default Index;