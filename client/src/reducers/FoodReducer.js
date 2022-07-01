export const FoodReducer = (state,action) => {
    switch(action.type){
        case "SET_FOODS":
            return [...action.payload]
        case "ADD_FOOD":
            return [
                ...state,
                action.payload
            ];
        case "DELETE_FOOD":
            return state.filter((food)=>food._id !== action.id);
        default:
            return state
    }
}