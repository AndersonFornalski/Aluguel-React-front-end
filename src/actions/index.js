import { FETCH_RENTAL_BY_ID_SUCCESS,
         FETCH_RENTAL_BY_ID_INIT,
         FETCH_RENTALS_SUCCESS, 
         LOGIN_SUCCESS,
         LOGIN_FAILURE} from '../actions/types';

import axios from 'axios';


const fetchRentalByIdInit = ()=>{
    return{
        type: FETCH_RENTAL_BY_ID_INIT        
    }
}

const fetchRentalByIdSuccess = (rental)=>{
    return{
        type: FETCH_RENTAL_BY_ID_SUCCESS,
        rental
    }
}

const fetchRentalsSuccess = (rentals)=>{
    return{
        type: FETCH_RENTALS_SUCCESS,
        rentals
    }
}



export const fetchRentals =()=> {
    return (dispatch) => {
        axios.get('http://localhost:3005/api/v1/rentals')
        .then(res => res.data)
        .then(rentals =>{
            dispatch(fetchRentalsSuccess(rentals));
        })            
  }
}

export const fetchRentalById =(rentalId)=> {    
    return function (dispatch) {
        dispatch(fetchRentalByIdInit());
        axios.get(`http://localhost:3005/api/v1/rentals/${rentalId}`)
        .then(res => res.data)
        .then(rental=> {
            dispatch(fetchRentalByIdSuccess(rental));
        })        
        
    }   
   
}


//  AUTH ATIONS   ============================

const loginSuccess = (token)=>{
   return{
    type: LOGIN_SUCCESS,
    token
   }
}

const loginFailure = (errors)=>{
    return{
        type: LOGIN_FAILURE,
        errors
    }
}

//CRIANDO LOGIN E AUTENTICAÇÃO 
export const login =(userData)=>{
    return dispatch =>{     
        return axios.post("http://localhost:3005/api/v1/users/auth", {...userData})
        .then(res => res.data)
        .then(token =>{
            debugger
            localStorage.setItem("auth_token", token);
            dispatch(loginSuccess(token));
        })
        .catch(({response})=>{
            debugger
            dispatch(loginFailure(response.data.errors))
        })
    }
}

export const register = (userData)=>{
     return axios.post("http://localhost:3005/api/v1/users/register", {...userData}).then(
         (res)=>{             
            return res.data;
         },
         (err)=>{             
            return Promise.reject(err.response.data.errors);
         }
     )
}