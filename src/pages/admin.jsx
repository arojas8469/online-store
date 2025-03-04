import React from 'react';
import './admin.css';

const AdminPanel = () => {
    return (
        <div>
            <nav className="navbar">
                <a href="/">Organika</a>
                <div>
                    <a href="/catalog">Catalog</a>
                    <a href="/about">About Us</a>
                    <a href="/admin">Admin</a>
                </div>
            </nav>

            <h1>Store Administration</h1>

            <div className="admin-container">
                <div className="admin-box">
                    <h2>Manage Products</h2>
                    <input type="text" placeholder="Title" />
                    <input type="text" placeholder="Price" />
                    <input type="text" placeholder="Image" />
                    <input type="text" placeholder="Category" />
                    <button>Save Product</button>
                </div>

                <div className="admin-box">
                    <h2>Manage Coupons</h2>
                    <input type="text" placeholder="Code" />
                    <input type="text" placeholder="Discount" />
                    <button>Save Coupon</button>
                </div>
            </div>

            <footer className="footer">
                Created by Sergio & Luis © SDGKU 2025
            </footer>
        </div>
    );
};

export default AdminPanel;


const fetchProducts = async () => {
try{ await dataServices.getProducts(); 
    setAllProducts(products);
} catch (error) {
    console.error("Error fetching products:", error);
}
};

async function loadProducts(){
    let data = await dataServices.getProducts();
    setAllProducts(data);
}

useEffects(function() {
    // when the component loads
    loadProducts();
}, []);