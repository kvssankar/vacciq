import React, { Component } from "react";
import QrReader from "react-qr-reader";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";

class Barcode extends Component {
  constructor() {
    super();
    this.state = {
      result: "No result",
    };
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data,
      });
      document.location.href = "/quicklogin/" + data;
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div>
        <Header />
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

//TODO: If login show one navbar or else other
//TODO: if login show one footer or else other
//TODO: style the page also
