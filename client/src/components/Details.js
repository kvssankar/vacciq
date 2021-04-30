import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';

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

                <div class="detail">
                    <ExitToAppIcon className="log-out-btn" />
                    <p className="log-out-btn"> Log Out</p>
                </div>

            </div>
        </>
    )
}