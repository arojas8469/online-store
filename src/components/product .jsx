import './pages.product.css'
import QuantityPicker from './quantitypicker';

function Product(props) {
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
 *  whebn clicked, call an add function
 * function should create console log any message
 * 
 */