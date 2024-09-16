import React from 'react'
import './card.css'


const card = () => {
    return (
        <div class="container">
            <div class="wrapper">
                <div class="banner-image"> </div>
                <h1> Linear Regression </h1>
                <p>Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit.</p>
            </div>
            <div class="button-wrapper">
                <button class="btn outline">DETAILS</button>
                <button class="btn fill">Visualize</button>
            </div>
        </div>
  )
}

export default card
