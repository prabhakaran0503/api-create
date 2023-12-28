import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
function Details() {
    const [photos, setphotos] = useState([]) 

    useEffect(() => {

        axios.get("https://api.tvmaze.com/shows/1/episodes")
            .then((res) =>
                setphotos(res.data)
            )

    }, [])
    const params = useParams()
    const item = photos.find((e) => e.id === parseInt(params.id))
    console.log(item);
    return (
       <div className="page-conatiner">
        
        <div className="page-roe">
      
             <div className="content-div">
       
                <img src={item?.image.medium}/>
                <div className="page-content">
                        <h3>Movie Name:{item?.name}</h3>
                        <h3>Rating:  {item?.rating.average}</h3>
                        <h3>season{item?.season}</h3>
                        <h3>Relasing date:{item?.airdate}</h3>
                        <h3>Actores:Amerkhan,limmy</h3>
                </div>
                
             </div>
      </div>
      </div>
    )
}
export default Details