import React from 'react'
import img from './profile.png'

export const ProfilePicture = (props) => {
    return (
        <div>
            <div className = "App">
                <img class = "ProfilePicture" style = {{width: "150px", height: "150px", borderRadius : "75px"}} src = {img}/>
                <p class = "ProfileName">{props.data.name}</p>
                <p class= "ProfileEmail text-muted" >{props.data.email}</p>
            </div>
        </div>
    )
}
