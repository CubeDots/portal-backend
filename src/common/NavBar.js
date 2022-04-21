import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useIsAuthenticated, useAuthUser, useSignOut } from 'react-auth-kit';
import $ from "jquery";
import LoginModal from '../components/LoginModal';
import UpdatePasswordModal from '../components/UpdatePasswordModal';

//import GoogleTranslate from "../components/GoogleTranslate";

function NavBar() {
    let publicPath = process.env.PUBLIC_URL;
    //const navigate = useNavigate();
    const auth = useAuthUser();
    const isAuthenticated = useIsAuthenticated();
    const signOut = useSignOut();

    const [isLoginModalShow, setisLoginModalShow] = React.useState(false);
    const [isForgotPasswordModalShow, setisForgotPasswordModalShow] = React.useState(false);

    const handleLogout = () => {
        signOut();
    };

    /*
    const handleLogin = () => {
        navigate('/');
    };
    */

    /* FORGOT PASSWORD CODE GOES HERE */
    const openForgotPasswordModal = () => {
        console.log('Forgot Password Modal click manually');
        setisForgotPasswordModalShow(true);
    }

    const closeForgotPasswordModal = () => {
        console.log('close Forgot Password Modal trigger');
        setisForgotPasswordModalShow(false);
    }


    /* LOGIN MODAL CODE GOES HERE */

    const openLoginModal = () => {
        console.log('openLoginModal click manually');
        setisLoginModalShow(true);
    };


    const closeLoginModal = () => {
        console.log('closeLoginModal trigger');
        setisLoginModalShow(false);
    };

    /*  
      if (!isAuthenticated()) {
          // Redirect to Login
          console.log("log as in");
          return (
              <Navigate to="/login" replace />
          );
  
      }
      */
    function responsiveMenu() {
        let navmenu = document.querySelectorAll(".navbarMenu");
        let element = document.querySelector(".navbar-collapse");
        let togglebtn = document.querySelector(".navbar-toggler");
        togglebtn.addEventListener("click", function () {
            //console.log("menu");
            togglebtn.classList.toggle("active");
        });
        //togglebtn.classList.toggle("#navbarResponsive");
        for (let i = 0; i < navmenu.length; i++) {
            navmenu[i].addEventListener("click", function () {
                console.log("menu");
                element.classList.remove("show");
                togglebtn.classList.remove("active");
            });
        }
    }
    useEffect(() => {
        $(window).on('scroll', function () {
            var nav = $('#navbarMain');
            var top = 20;
            if ($(window).scrollTop() >= top) {

                nav.addClass('fixed');

            } else {
                nav.removeClass('fixed');
            }
        })
        responsiveMenu();
    }, [])

    return (
        <>

            <div>

            </div>
            <nav className="navbar navbar-expand-lg fixed-top" id="navbarMain">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={publicPath + "/assets/images/Cubedots-logo.svg"} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link navbarMenu" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/findagents">Find Agents</NavLink>
                                </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link navbarMenu" to="/projects">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link navbarMenu" to="/whyus">Why Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link navbarMenu" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link navbarMenu" to="/contact">Contact Us</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-button" to="" >Dashboard</NavLink>
                            </li> */}
                            {isAuthenticated() ?
                                <>
                                    <li className="nav-item dropdown">
                                        <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth().user.name}
                                        </div>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><Link className="dropdown-item navbarMenu" to="/dash">Dashboard</Link></li>
                                            <li><Link className="dropdown-item navbarMenu" to="/cusocials">CuSocial</Link></li>
                                            <li><Link className="dropdown-item navbarMenu" to="/cuverse">CuVerse</Link></li>
                                            <li><Link className="dropdown-item navbarMenu" to="/dash/profile">Profile</Link></li>
                                            <li><a className="dropdown-item navbarMenu" onClick={openForgotPasswordModal}>Change Password</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><button className="dropdown-item navbarMenu" to="" onClick={handleLogout} >Logout</button></li>
                                        </ul>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <button className="nav-button navbarMenu" id="loginButton" to="" onClick={openLoginModal}>Sign In</button>
                                    </li>
                                </>

                            }


                            {/* <li className="nav-item pt-2">
                                <GoogleTranslate />
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
            <LoginModal isLoginModalShow={isLoginModalShow} handleChane={closeLoginModal} />

            <UpdatePasswordModal isForgotPasswordModalShow={isForgotPasswordModalShow} handleChane={closeForgotPasswordModal} />




            {/* {!isAuthenticated() ?
                (

                    <>
                        <button onClick={handleLogin} className="btn btn-sm btn-primary signinbtn">
                            Sign in
                        </button>
                    </>
                )
                : ''
            } */}

        </>
    );
}

export default NavBar;