import React from 'react'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';

export const Details = (props) => {
    return (
        <div>
            <div class = "details">
                <div class="detail">
                    <div class="icon-header">
                        <EventAvailableIcon fontSize="large" />
                        <h3>Date</h3>
                    </div>
                    <h4 class="text-muted">{props.data.date}</h4>
                </div>

                <div class="detail">
                    <div class="icon-header">
                        <ScheduleIcon fontSize="large" />
                        <h3>Time</h3>
                    </div>
                    <h4 class="text-muted">{props.data.time}</h4>
                </div>

                <div class="detail">
                    <div class="icon-header">
                        <BusinessIcon fontSize="large" />
                        <h3>Centre</h3>
                    </div>
                    <h4 class="text-muted">{props.data.centreName}</h4>
                </div>

                <div class="detail">
                    <div class="icon-header">
                        <LocationOnIcon fontSize="large" />
                        <h3>Location</h3>
                    </div>
                    <h4 class="text-muted">{props.data.centreAddress}</h4>
                </div>

                <div class="detail">
                    <div class="icon-header">
                        <PhoneIcon fontSize="large" />
                        <h3>Phone</h3>
                    </div>
                    <h4 class="text-muted">{props.data.centrePhone}</h4>
                </div>
            </div>
        </div>
    )
}
