import firebase from "../firebaseInit";


export default class ProductService {
    constructor() {
        this.db = firebase.firestore();
    }

    async all() {
        const products = await this.db.collection("products").get(); // poziv baze

        const newProducts = [];
        products.docs.forEach((product) => {
            newProducts.push(product.data());
        })

        return newProducts;
    }

    async getByCategory(category) {
        // get all products by category

        const products = await this.all();

        const prodcutsByCat = [];

        products.forEach((product) => {

            if(product.category === category) {
                prodcutsByCat.push(product);
            }
        })

        return prodcutsByCat;
    }
}