import React, { useContext, useState } from 'react'
import axios from 'axios'
import { FoodContext } from '../contexts/FoodContext';

const Form = () => {
    const {dispatch} = useContext(FoodContext)
    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [price,setPrice] = useState(0);
    const [quantity,setQuantity] = useState(0);
    const [available,setAvailable] = useState(true);
    
    const submitHandler = (e)=>{
        e.preventDefault();
        setName("");
        setDesc("");
        setPrice(0);
        setQuantity(0);
        setAvailable(true);

        const newFood = {
            name,desc,price,quantity,available
        }
        
        axios.post("/foods",newFood)
        .then(res=> dispatch({type:"ADD_FOOD",payload:res.data}))
    }
  return (
    <div>
        <h1 className="text-4xl font-bold text-green-50">Create a Food</h1>
    <form className="grid max-h-90 gap-2 p-4" onSubmit={submitHandler}>
        <label className="text-lg font-semi-bold text-green-100">Food Name</label>
        <input 
        className="rounded p-2"
        type="text"
        value={name}
        onChange={(e)=> setName(e.target.value)} />
        <label className="text-lg font-semi-bold text-green-100" >Food Price</label>
        <input 
        className="rounded p-2 "
        type="number" 
        value={price} 
        onChange={(e)=> setPrice(e.target.value)} />
        <label className="text-lg font-semi-bold text-green-100"
        >Food Quantity</label>
        <input  
        className="rounded p-2 " 
        type="number" 
        value={quantity} 
        onChange={(e)=> setQuantity(e.target.value)}  />
        <label className="text-lg font-semi-bold text-green-100" >Food Description</label>
        <textarea  
        className="rounded p-2 " 
        cols="10" rows="5"
        value={desc} 
        onChange={(e)=> setDesc(e.target.value)} />
        <label className="text-lg font-semi-bold text-green-100">Food Availability</label>
        <select  
        className="rounded p-2 "
        value={true} onChange={(e)=> setAvailable(e.target.value)} >
            <option  className="rounded p-2 " value={true}>Available</option>
            <option  className="rounded p-2 " value={false}>Not Available</option>
        </select>

        <input type="submit" className=" hover:bg-opacity-75 rounded px-3 py-2 bg-green-300"/>
    </form>
    </div>
  )
}

export default Form