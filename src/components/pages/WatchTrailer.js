import React from 'react'
import '../../App.css'


export default function WatchTrailer(){
    return <h1 className='watch-trailer'><video src = {require('./videos/trailer.mp4').default} autoPlay  />
    </h1>
}