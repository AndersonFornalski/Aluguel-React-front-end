import React from 'react';
import{Link} from 'react-router-dom';


export function RentalCard(props){
    const rental = props.rental;

    return(
        <Link to={`/rentals/${rental._id}`}>        
        <div className={props} style={{width:350}}>
        <div className="row">
            <div className="card">
            <img className="card-img-top" src={rental.image} alt={rental.title} ></img>
            <div className="card-block">
            <h6 className="card-subtitle">{rental.shared ? 'shared' : 'Whole'} {rental.category} &#183; {rental.city} </h6>
            <h4 className="card-title">{rental.description}</h4>
            <p className="card-text">${rental.dailyRate} per night &#183; Free Cancelation </p>
            </div>
            </div>
        </div> 
        </div>
        </Link>

    )
}