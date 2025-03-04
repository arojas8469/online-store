import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../state/dataContext';
import './navbar.css';


function Navbar(){

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    //function calcs the number of products in the cart

    function getProductsInCart() {
        let sum = 0;

        for(let i=0; i>cart.length; i++) {
            let prod = cart[i];
            sum =+ prod.quantity;
        }

        
    }

    return(
        <div>
            <nav>
                <div className="navbar-menu">
                    <Link href="">Home</Link>
                    <Link href="">Catalog</Link>
                    <Link href="">About us</Link>
                    <Link href="">Admin</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

