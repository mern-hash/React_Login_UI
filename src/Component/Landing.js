import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Header2 from "./MainHeader";

export default function Landing() {
  return (
      <div>
          <Header2 />
          {/*<div className="App-header" style={{*/}
          {/*    backgroundImage: `url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm218batch4-katie-17.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=616882576ddcccf8d6fad81adf6f52a1")`*/}
          {/*}}>*/}
          <div className="App-header home_banner">
              <div className="">
                  {/*<Button variant="outline-primary" size="lg" className="login-register-btn">*/}
                  {/*    <Link to="/login">LOGIN</Link>*/}
                  {/*</Button>{' '}*/}
                  {/*<Button variant="outline-primary" size="lg" className="login-register-btn">*/}
                  {/*    <Link to="/Register">Register</Link>*/}
                  {/*</Button>*/}
              </div>
              <div className="home_gif">
                  <div className="container">
                      <div className="row" >
                <div className="col-lg-5 col-sm-12" >
                    <div className="home_contant">
                        <h1>Heading</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Button variant="outline-primary" size="lg" className="header_inner_btn">
                            <Link to="/Register">Learn More</Link>
                        </Button>
                    </div>
                </div>
                  <div className="col-lg-7 col-sm-12" >

                  </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
};
