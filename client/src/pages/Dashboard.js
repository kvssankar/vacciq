import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import QueueNumber from "../components/Dashboard/QueueNumber";
import QueueTable from "../components/Dashboard/QueueTable";
import Navbar from "../components/Dashboard/Navbar";

const Dashboard =({
}) => {
    return(
        <div>
        <QueueNumber />
        <Navbar />
        <QueueTable />
        </div>
    );
};

export default Dashboard;