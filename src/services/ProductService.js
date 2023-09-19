import firebase from "../firebaseInit";


export default class ProductService {
    constructor() {
        this.db = firebase.firestore();
    }

    async all() {
        const products = await this.db.collection("products").get(); // poziv baze

        const newProducts = [];
        products.docs.forEach((product) => {
            product = {...product.data(), ...{'id': product.id}}

            newProducts.push(product);
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

    async getById(productId) { // pozivamo id proizvoda iz baze
        const products = await this.all();

        for(let product of products) {
            if(product.id === productId) {
                return product;
            }
        }

        return null;

    }

    async updateProduct(productId, data) {
        await this.db
            .collection('products')
            .doc(productId)
            .update(data);
    }

    async create(data) { // dodavanje u bazu ordera
        await this.db.collection('products').add(data);

    }
}