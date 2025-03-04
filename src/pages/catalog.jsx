import React from 'react';
import "./catalog.css";
import Product from '../components/product '
import { useEffect } from 'react';
import DataService from '../services/dataServices';

// const ProductCard = ({ name, price, oldPrice, img }) => {
//     return (
//         <div className="product-card">
//             <img src={img} alt={name} />
//             <h3>{name}</h3>
//             <p className="product-price">
//                 ${price} <span className="old-price">${oldPrice}</span>
//             </p>
//             <div className="quantity-control">
//                 <button>-</button>
//                 <span>1</span>
//                 <button>+</button>
//             </div>
//             <button className="add-to-cart">Add to Cart</button>
//         </div>,
        

//         <div className="product-card">
//             <img src={img} alt={name} />
//             <h3>{name}</h3>
//             <p className="product-price">
//                 ${price} <span className="old-price">${oldPrice}</span>
//             </p>
//             <div className="quantity-control">
//                 <button>-</button>
//                 <span>1</span>
//                 <button>+</button>
//             </div>
//             <button className="add-to-cart">Add to Cart</button>
//         </div>,


//         <div className="product-card">
//             <img src={img} alt={name} />
//             <h3>{name}</h3>
//             <p className="product-price">
//                 ${price} <span className="old-price">${oldPrice}</span>
//             </p>
//             <div className="quantity-control">
//                 <button>-</button>
//                 <span>1</span>
//                 <button>+</button>
//             </div>
//             <button className="add-to-cart">Add to Cart</button>
//         </div>,

//         <div className="product-card">
//             <img src={img} alt={name} />
//             <h3>{name}</h3>
//             <p className="product-price">
//             ${price} <span className="old-price">${oldPrice}</span> 
//             </p>
//         <div className="quantity-control">
//             <button>-</button>
//             <span>1</span>
//             <button>+</button>
//         </div>
//         <button className="add-to-cart">Add to Cart</button>
//         </div>,
//     );
// };

// export default ProductCard;


const catalog = [
    {
        "title": "apple",
        "image": "/images/apples.jpg",
        "price": 12.90,
        "category": "",
        "_id": "1892389",
    }, 
    {
        "title": "orange",
        "image": "/images/oranges.jpg",
        "price": 12.90,
        "category": "fruit",
        "_id": "gjhjfkfk",
    },
    {
        "title": "banana",
        "image": "/images/bannans.jpg",
        "price": 12.90,
        "category": "fruits",
        "_id": "jhjfgkf",
    },
];

const categories=["fruits", "beverages", "merchandise", "dairy and eggs"];

    

function Catalog() {
    const [allProducts, setAllproducts] = useState([]);

    async function loadProducts() {
        const data = await DataService.getProducts();
    }




    // use effect is executed when the component loads
    useEffect(function(){
        loadProducts();
    }, []);
    
    return(
        <div className="catalog page">
            <h1>Liqour</h1>
            {/* <div className="filters">
            { catalog.map(prod => <Product data={prod}/>)}
            </div>
            { categories.map(cat => <button className='btn btn-small btn-success'>{cat}</button>)} */}
            {allProducts.map(prod => <Product data={prod} />)}
        </div>
    );
}


export default Catalog;