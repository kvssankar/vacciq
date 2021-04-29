import React from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const Detail = (props) => {
    return (
        <div class = "detail">
            <PersonOutlineIcon/>
            <p class = "about-you"> {props.name} </p>
            <ChevronRightIcon/>
        </div>
    )
}
