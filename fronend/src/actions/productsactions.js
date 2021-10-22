import Axios from 'axios';
import { LIST_PRODUCTS,LIST_PRODUCTS_SUCCESS,LIST_PRODUCTS_FAIL } from '../constants/constantstypes';

export const productsactions=()=>{
      return   async (dispatch)=>{
                dispatch({
                    type:LIST_PRODUCTS,
                    loading:false,
                    error:"",
                    products:[]
                });
                try{
            const {data}=await Axios.get('http://localhost:8080/api/products')
                dispatch({type:LIST_PRODUCTS_SUCCESS,loading:true,error:"",products:data})   
                }catch(err){
                dispatch({type:LIST_PRODUCTS_FAIL,loading:true,error:err.message,products:[]})
                }
         }
}