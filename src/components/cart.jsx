import { useContext } from "react";
import DataContext from "../state/dataContext";
import './cart.css'

function Cart() {

    let cart = useContext(DataContext).cart;

    function calculateNumProds(){
        let sum =0;
        return sum
    }

    function calculateNumProds(){
        let sum = 0;
        for(let i=0; i<cart.length; i++) {
            let prod = cart[i];
            sum += prod.quantity;
        }

        return sum;
    }


    function getTotal(){
        let total =0;

        for(let i=0; i<cart.length; i++){
            const prod = cart[i];
            total += (prod.qunatity * prod.price)
        }
    }

    return (
        <div className="cart page">
            <h1>Ready to complete the order?</h1>
            <h3>We have {calculateNumProds()} products reasy for you!</h3>

            <div className="parent">
                <div className='prods'>
                    {cart.map(prod =><div className="prod-in-cart">
                        <img src></img>
                        <h5>{prod.title}</h5>

                        <label>${prod.price.toFixed(2)}</label>
                        <label>{prod.quantity}</label>
                        <label>${prod.price * prod.quantity}</label>
                    </div>)}
                </div>
            </div>
        </div>
    )

}
export default Cart;