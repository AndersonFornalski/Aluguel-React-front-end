import React from 'react';
import { connect } from 'react-redux';
import '../styles/rentalDetail.css';


import * as actions from '../actions';
import { RentalDetailInfo } from './rentalDetailInfo';
import { MapWithAMarker } from '../map/GoogleMap';

class RentalDetail extends React.Component{

        componentWillMount(){
        const rentalId = this.props.match.params.id;
        //Dispatch action
        this.props.dispatch(actions.fetchRentalById(rentalId));
    }

    render(){
        const rental = this.props.rental;
        
        if(rental._id){
            return(
                <section className="rentalDetails" id='rentalDetails'>
                <div className='upper-section'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img src={rental.image} style={{width:540}}></img>
                    </div>
                    
                    <div className='col-md-6'>

                    <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBqmNqg1gHqkiNYNQCHsP_9AY7SgVhd23U&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `410px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                      />

                    </div>
                  </div>
                </div>
              
                <div className='details-section'>
                  <div className='row'>
                    <div className='col-md-8'>

                     <RentalDetailInfo rental={rental}/>
                    
                    </div>
                    <div className='col-md-4'> BOOKING</div>
                  </div>
                </div>
              </section>
            )
        }else{
            return(
            <div>
                <h1>Loading...</h1>
            </div>
            )
        }
    }    
}

function mapStateToProps(state){
    return{
       rental: state.rental.data
    }
}
export default connect(mapStateToProps)(RentalDetail);
