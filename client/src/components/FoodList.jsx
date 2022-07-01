import axios from "axios"
import { useContext, useEffect } from "react"
import { FoodContext } from "../contexts/FoodContext"


const FoodList = () => {

    const {foods,dispatch} = useContext(FoodContext);

    useEffect(() => {
     axios.get("/foods")
     .then(res=>dispatch({type:"SET_FOODS",payload:res.data}))
    },[dispatch])

  
    const handleDelete = (id) => {
        axios.delete(`/foods/${id}`)
        .then(res=> dispatch({type:"DELETE_FOOD", id:res.data._id}))
    }
  return (
    <div>
        <h1 className="text-3xl text-green-100">List of Foods</h1>
        <div  className="grid  sm:grid-cols-2 grid-cols-1 gap-5 h-100 mt-5">
   {
    foods.length>0? foods.map((food)=>{
        return(
        <div key={food._id} className="p-2 bg-white rounded text-green-900" onClick={()=>handleDelete(food._id)}>
            <h1 className="text-2xl font-bold mb-2">{food.name}</h1>
            <h2 className="text-xl">Price {food.price} Rs</h2>
            <p className="text-base mb-2">{food.desc}</p>
            <h4 className="text-md">Quantity: {food.quantity} Kg</h4>
            <h5 className="text-sm">Availability: {food.available? "available":"not available"}</h5>
        </div>
  
        )
    })  : <h1>Loading....</h1>
   }
    </div>
   </div>
  )
}

export default FoodList