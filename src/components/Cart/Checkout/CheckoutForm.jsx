import React from 'react'
import './Form.css'
import { useUserContext } from '../../../context/ContextProvider'
import { useForm } from 'react-hook-form';
import Toastify from 'toastify-js'
const CheckoutForm = () => {
  const {createOrder} = useUserContext();

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createOrder(data.name, data.apellido, data.email);
  }
  return (
    <form action="" className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className='label' >Name:</label>
      <input type="text" name="nombre" placeholder="Nombre" className='input' {...register("name")}/>
      <label htmlFor="apellido" className='label'>Apellido:</label>
      <input type="text" name="apellido" placeholder="Apellido" className='input' {...register("apellido")}/>
      <label htmlFor="email" className='label'>Email:</label>
      <input type="text" name="email" placeholder="Email" className='input' {...register("email")}/>
      <button className='finish-btn' type='submit'>Comprar</button>
    </form>
  )
}

export default CheckoutForm