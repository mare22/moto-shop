import firebase from "../firebaseInit";


export default class OrderServie {
    constructor() {
        this.db = firebase.firestore(); // konekcija ka bazi

    }
    async all() {
        const orders = await this.db.collection("orders").get(); // poziv baze

        const newOrders = [];
        orders.docs.forEach((order) => {
            order = {...order.data(), ...{'id': order.id}}

            newOrders.push(order);
        })
        
        return newOrders;
    }
    async create(data) { // dodavanje u bazu ordera
        console.log(data);
        await this.db.collection('orders').add(data);
    }
}