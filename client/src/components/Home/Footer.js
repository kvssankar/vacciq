import React from "react";
import "./Home.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="home-footer">
        <div className="footer-info">
          <h3>LineItOut</h3>
          <p className="pb-2">
            <em>
              No more waiting in line. Enter a smart world free of lines using
              LineItOut. To know more about LineItOut click{" "}
              <a className="underline" href="/about">
                Here
              </a>
            </em>
          </p>
          <p>
            For any query &nbsp;
            <strong>Email:</strong> kvs.sankar001@gmail.com
            <br />
          </p>
          <div className="d-flex justify-content-center">
            <a className="underline" href="/">
              Home
            </a>
            <a className="underline" href="/about">
              About
            </a>
            <a className="underline" href="/register">
              Register
            </a>
            <a className="underline" href="/login">
              Login
            </a>
          </div>
          <p className="mt-2 mb-0">
            <b>Made with ❤️ by Team Doofenshmirtz</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
