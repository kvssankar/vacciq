import React, { Component } from "react";
import QrReader from "react-qr-reader";

class Barcode extends Component {
  state = {
    result: "No result",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
      document.location.href = "/q" + data;
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
      </div>
    );
  }
}

export default Barcode;
