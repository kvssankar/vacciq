import React from 'react'
import img from './profile.png'
import {Details} from './Details.js'

export const ProfilePage = (props) => {
    return (
        <div>
            <div className = "App">
                <img class = "ProfilePicture" style = {{width: "150px", height: "150px", borderRadius : "75px"}} src = {img}/>
                <p class = "ProfileName">{props.data.name}</p>
                <p class= "ProfileEmail text-muted" >{props.data.email}</p>
            </div>
            <Details data = {props.data}/>
        </div>
    )
}
