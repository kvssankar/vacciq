import React, { Component } from "react";
import QrReader from "react-qr-reader";
import Navbar from "../components/Dashboard/Navbar";
import Footer from "../components/Dashboard/Footer.jsx";

class Barcode extends Component {
  state = {
    result: "No result",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
      document.location.href = "/quicklogin/" + data;
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    return (
      <div>
        <Navbar />
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        <p>{this.state.result}</p>
        <Footer />
      </div>
    );
  }
}

export default Barcode;
