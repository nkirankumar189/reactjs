import {LOADING_PRODUCTS,LOADING_PRODUCTS_SUCCESS,
    LOADING_PRODUCTS_FAIL} from './actions/productsactions';
const intialState={
    loading:false,
    error:"",
    products:[]
}



export function productreducer(state=intialState,action){
    switch(action.type){
        case LOADING_PRODUCTS:
            case LOADING_PRODUCTS_SUCCESS:
                case LOADING_PRODUCTS_FAIL:
                    return{
                         ...state,
                         loading:action.loading,
                         error:action.error,
                         products:action.products
                    }

                    
                    default:
                        return state;

    }
}