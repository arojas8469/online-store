import axios from 'axios';


// let saveProd = await dataService.saveProduct(validProd);
// console.log(saveProd);


function handleProduct(e) {

}


class DataService {

    async getProducts() {
        let response = await axios.get("http:// s127.0.0.1:5000/api/products")
        return response.data;
    }

    async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;
    }
}

// async loadCoupons() {
//     let response = await
    
// }

export default new DataService(); 