import React from 'react'

export const ProfilePicture = (props) => {
    return (
        <div>
            <div className = "App">
                <img class = "ProfilePicture" style = {{width: "150px", height: "150px", borderRadius : "75px"}} 
                src = "https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <h2 class = "ProfileName">{props.data.name}</h2>
                <h3 class= "ProfileEmail text-muted" >{props.data.email}</h3>
            </div>
        </div>
    )
}
