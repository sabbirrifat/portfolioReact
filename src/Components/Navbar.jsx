import React, {useEffect, useState} from 'react'
import {Link} from 'react-scroll';
import {FaChevronUp} from 'react-icons/fa'


const Navbar = () => {

  const [handleShow, sethandleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 150){
                sethandleShow(true)
            }
            else{
                sethandleShow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
        
    }, [])
    return (<>

        <nav
          className={`navbar navbar-b ${handleShow ? 'navbar-reduce' : 'navbar-trans'} navbar-expand-md fixed-top`}
          id="mainNav"
          style={{ padding: '25px'}}
        >
          <div class="container">
            <Link class="navbar-brand js-scroll" to="home" smooth={true} >Sabbir Rifat</Link>
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              class="navbar-collapse collapse justify-content-end"
              id="navbarDefault"
            >
              <ul class="navbar-nav">
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
            </div>
          </div>
        </nav>
        <Link to="home" class="back-to-top" smooth={true} style={{ display: handleShow ? 'inline' : 'none'}}><FaChevronUp /></Link>
        </>
    )
}

export default Navbar
