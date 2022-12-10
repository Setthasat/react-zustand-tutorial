import React from 'react'
import { FcNook } from 'react-icons/fc'
import CardTodos from '../components/Todo/CardTodos'
import FormTodo from '../components/Todo/FormTodo'

function Todo() {
    // const [count, setCount] = React.useState(0);

    // const [infoTodo, setInfoTodo] = React.useState({
    //     title: null,
    //     description: null
    // });

    React.useEffect(()=> {
        console.log('trigger useEffect on todo page');
    }, [])


  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='flex justify-center items-center text-3xl font-mono text-teal-600 mt-6'>TODO List! <FcNook className='text-[3rem]' /> (parent)</h1>        
        <FormTodo/>
        <br />
        <CardTodos/>
    </div>
  )
}

export default Todo