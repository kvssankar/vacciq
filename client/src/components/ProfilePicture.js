import React from 'react'

export const ProfilePicture = (props) => {
    return (
        <div>
            <div className = "App">
                <img class = "ProfilePicture" style = {{width: "150px", height: "150px", borderRadius : "75px"}} src = 'profile.png'/>
                <p class = "ProfileName">{props.data.name}</p>
                <p class= "ProfileEmail text-muted" >{props.data.email}</p>
            </div>
        </div>
    )
}
