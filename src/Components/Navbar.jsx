import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaChevronUp } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavbarMain = () => {

  const [handleShow, sethandleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        sethandleShow(true);
      } else {
        sethandleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        className={`navbar navbar-b ${handleShow ? 'navbar-reduce' : 'navbar-trans'}`}
      >
        <div className="container" style={{ paddingTop: '8px'}}>
          <Navbar.Brand href="#" style={{ fontSize: '26px', color: '#fff'}}>Sabbir Rifat</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => !handleShow ? sethandleShow(true) : null }>
              <span></span>
              <span></span>
              <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul class="navbar-nav ml-auto">
            
              <li class="nav-item">
                  <Link class="nav-link js-scroll active" to="home" smooth={true} >Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link js-scroll" to="about" smooth={true} >About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link js-scroll" to="service" smooth={true} >Skills</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link js-scroll" to="work" smooth={true} >Projects</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link js-scroll" to="contact" smooth={true} >Contact</Link>
                </li>
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Link
        to="home"
        class="back-to-top"
        smooth={true}
        style={{ display: handleShow ? "inline" : "none" }}
      >
        <FaChevronUp />
      </Link>
    </>
  );
};

export default NavbarMain;
