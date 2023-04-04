export default class CartService {
    AddProductToCart(productId) {
        let productsInCart = this.getProductsInCart();
        productsInCart.push(productId); // u nasu promenljivu smo ubacili product id
        localStorage.setItem("cart", JSON.stringify(productsInCart));
      }
      getProductsInCart() {
        if(localStorage.getItem('cart')) {
          return JSON.parse(localStorage.getItem('cart'));
        }
        return [];

      }
}
