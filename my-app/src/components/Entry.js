import React from "react"
import '../App.css'

export default function Entry(props) {
 return (

  <div className="entry">
   <img alt="img" className="entry--locationImage" src={props.imageUrl}></img>
   <div className="entry--words">
    <div className="entry--country">
     <img className="location-symbol" src="../../assets/location-symbol.png" />
     <p className="entry--countryText"> {props.location} &nbsp;&nbsp;&nbsp;</p>
     <a className="entry--countryLink" href={props.googleMapsUrl}>View on Google Maps</a>
    </div>
    <h1 className="entry--location"> {props.title} </h1>
    <p className="entry--date"> {props.startDate} - {props.endDate} </p>
    <p className="entry--description"> {props.description}</p>
   </div>

  </div >


 )

}
