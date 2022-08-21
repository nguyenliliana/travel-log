import React from "react"
import '../App.css'
export default function Entry(props) {
 return (

  <div className="entry">
   <img src='https://source.unsplash.com/WLxQvbMyfas'></img>
   <div className="entry--words">
    <div className="entry--country">
     <p className="entry--countryText"> JAPAN &nbsp;&nbsp;&nbsp;</p>
     <a className="entry--countryLink" href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
    </div>
    <h1 className="entry--location"> Mount Fuji </h1>
    <p className="entry--date"> 12 Jan, 2021 - 24 Jan, 2021 </p>
    <p className="entry--description"> Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
   </div>

  </div >


 )

}
