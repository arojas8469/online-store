import { useState, useContext } from 'react';
import QuantityPicker from './quantityPicker';
import DataContext from '../state/dataContext';
import './product.css'

function Product(props) {
    const [quantity, setQuantity] = useState(1);
    const addProductiontoCart = useContext(DataContext).addProductToCart 


    function add () {

        /**
         * create a new object (prodForCart)
         * should have everyothing that props.data contains
         * and should also have quantity
         * 
         * send that object to the global add
         */
        let prodForCart = {...props.data, quantity: quantity};
        prodForCart.quantity = quantity;// the global fn

    }


    console.log("clicked");
    return(
        <div className="product">

            <img src={props.data.title} alt=""></img>
            
            <h4>{props.data.title}</h4>

            <label>{props.data.price}</label>

            <QuantityPicker></QuantityPicker>

            <button  onCLick={add} className='btn btn-sm btn-info'>Add</button>
        </div>
    );
}



export default Product;

/**
 *  when clicked, call an add function
 * function should create console log any message
 * 
 */

