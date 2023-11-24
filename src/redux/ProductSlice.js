
// import {createSlice} from "@reduxjs/toolkit"




// const productSlice =createSlice({
//     name:"product",
//     initialState:{
// typeer:false,
// book:localStorage.getItem("data")?
// JSON.parse(localStorage.getItem("data")):[]
//     },
//     reducers:{
//  add:(state,action )=>{
// state.typeer=false
// },
// remove:(state,action)=>{
//     state.typeer=true
// },
// removeitem:(state,action)=>{
//     state.book=state.book.filter(i=>i.id!==action.payload)
//     localStorage.setItem("data" ,JSON.stringify(state.book))

// },
// addbook:(state,action)=>{
//     state.book.push(action.payload)
// },

//     }
// })



// export default productSlice.reducer
// export const {add,remove,addbook,removeitem}=productSlice.actions






import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchproduct=createAsyncThunk(
    "book/getbook",
    async (___, fetchApi) => {
      try {
        const res = await fetch("https://api.itbook.store/1.0/new");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    }
    )


    const getproducts=createSlice({
name:"product",
initialState:{product:[],
loading:true,
 typeer:false,
cart:localStorage.getItem("buy")?
JSON.parse(localStorage.getItem("buy")):[]
},
reducers:{
  addproduct:(state,action)=>{
    localStorage.setItem("buy", JSON.stringify(state.cart))
    const yf=action.payload.isbn13
    const isitemcart=state.cart.find(cartitem=>cartitem.isbn13==yf)
    
    if (isitemcart) {
return alert("The product is in the shopping list")
    }else{
        state.cart.push(action.payload)
        

        
}


}
,
adds:(state,action )=>{
     state.typeer=true
     },
     remove:(state,action)=>{
             state.typeer=false
         },
removeitem:(state,action)=>{
  state.cart=state.cart.filter((p)=>p.isbn13!==action.payload)
      localStorage.setItem("buy", JSON.stringify(state.cart))
}
},
extraReducers:{
  [fetchproduct.pending]:(state,action)=>{
    state.loading=true
  },
  [fetchproduct.fulfilled]: (state, action) => {
      state.product= action.payload;
      state.loading=false
    },
    [fetchproduct.rejected]: (state, action) => {
    }

}

    })
    export default getproducts.reducer;
    export const {addproduct,removeitem,adds,remove}=getproducts.actions