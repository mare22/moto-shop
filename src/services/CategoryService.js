import firebase from "../firebaseInit";


export default class CategoryService {
    constructor() {
        this.db = firebase.firestore();
    }

    async all() {
        const categories = await this.db.collection("categories").get(); // poziv baze

        const newCategories = [];
        categories.docs.forEach((category) => {
            newCategories.push(category.data());
            
        })

        return newCategories;
        
    }
}