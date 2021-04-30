import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';


export const Details = (props) => {
    return (
        <>
            <div className="details">
                <div class="detail">
                    <PersonIcon className="person-icon" />
                    <p className="about-you"> {props.data.name} </p>
                </div>

                <div class="detail">
                    <PhoneIcon className="person-icon" />
                    <p className="about-you"> {props.data.phone} </p>
                </div>

                <div class="detail">
                    <EmailIcon className="person-icon" />
                    <p className="about-you"> {props.data.email} </p>
                </div>

            </div>
        </>
    )
}