import firebase from "../firebaseInit";


export default class UserService {
  constructor() {
    this.db = firebase.firestore(); // konekcija ka bazi
  }

  create(data) {
      this.db.collection("users").add(data)
  }

  async getUserByEmail(email) {
    const user = await this.db.collection("users")
                        .where('email', '==', email)
                        .get(); // poziv baze

    // {...{name: 'nikola'}, ...{price: 100}} === {name: 'nikola', price: 100}
    return {
      ...user.docs[0].data(), 
      ...{uid: user.docs[0].id}
    }
  }
}
