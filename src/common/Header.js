
import { useEffect } from 'react';
import $ from "jquery";
import NavBar from './NavBar';


function Header() {
    //let publicPath = process.env.PUBLIC_URL;
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
    }, [])
    return (
        <>
            <header id="header">
                <NavBar />
            </header>
            {/* <!-- Modal --> */}
            
          
        </>
    );
}

export default Header;