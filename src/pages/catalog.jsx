import "./catalog.css";
import Product from '../component/products';

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
    handleClick = (text) => {
        alert(`You clicked: ${fruits}`);
    };

    render(Catalog) {
        return (
            <div>
                <h1>catalog</h1>
                <button className="button" onClick={{} => this.handleClick("Handling")}>
                    Product Catalog
            </div>
        )
    }

function Catalog() {
    return(
        <div className="catalog">
            <h1>Check out our Liqour</h1>
            <div className="filters">
            { catalog.map(prod => <Product data={prod}/>)}
            </div>
            { catalog.map(prod => <button className='btn btn-small btn-success'>{cat}</button>)}
            
        </div>
    );
}


export default Catalog;