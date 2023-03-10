<template>
  <Header />
  <div class="products">
   <div class="products-wrapper">
      <div class="products-container">
        
        <div class="single-container">
          <div class="image-container">
            <img src="../assets/images/h11.png" alt="">
          </div><!--end.image-container-->
            <h3>Product Name</h3>
            <div class="price">
              <h4>90e</h4>
            </div> <!--end.price-->
            <div class="btn-wrapper">
              <button><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div><!--end.single-container-->
      

        <div class="single-container">
          <div class="image-container">
            <img src="../assets/images/h3.png" alt="">
          </div><!--end.image-container-->
            <h3>Product Name</h3>
            <div class="price">
              <h4>90e</h4>
            </div> <!--end.price-->
            <div class="btn-wrapper">
              <button><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div><!--end.single-container-->
   


        <div class="single-container">
          <div class="image-container">
            <img src="../assets/images/h22.png" alt="">
          </div><!--end.image-container-->
            <h3>Product Name</h3>
            <div class="price">
              <h4>90e</h4>
            </div> <!--end.price-->
            <div class="btn-wrapper">
              <button><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div><!--end.single-container-->

        <div class="single-container">
          <div class="image-container">
            <img src="../assets/images/h22.png" alt="">
          </div><!--end.image-container-->
            <h3>Product Name</h3>
            <div class="price">
              <h4>90e</h4>
            </div> <!--end.price-->
            <div class="btn-wrapper">
              <button><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div><!--end.single-container-->
      </div><!--end.products-container-->
   </div><!--end products-wrapper-->



   <div class="products-wrapper">
      <div class="products-container">
        <div class="single-container">
          <div class="image-container">
            <img src="../assets/images/h11.png" alt="">
          </div><!--end.image-container-->
            <h3>Product Name</h3>
            <div class="price">
              <h4>90e</h4>
            </div> <!--end.price-->
            <div class="btn-wrapper">
              <button><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div><!--end.single-container-->

        <div class="single-container">
          <div class="image-container">
            <img src="../assets/images/h3.png" alt="">
          </div><!--end.image-container-->
            <h3>Product Name</h3>
            <div class="price">
              <h4>90e</h4>
            </div> <!--end.price-->
            <div class="btn-wrapper">
              <button><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div><!--end.single-container-->


        <div class="single-container">
          <div class="image-container">
            <img src="../assets/images/h22.png" alt="">
          </div><!--end.image-container-->
            <h3>Product Name</h3>
            <div class="price">
              <h4>90e</h4>
            </div> <!--end.price-->
            <div class="btn-wrapper">
              <button><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div><!--end.single-container-->

        <div class="single-container">
          <div class="image-container">
            <img src="../assets/images/h22.png" alt="">
          </div><!--end.image-container-->
            <h3>Product Name</h3>
            <div class="price">
              <h4>90e</h4>
            </div> <!--end.price-->
            <div class="btn-wrapper">
              <button><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div><!--end.single-container-->
      </div><!--end.products-container-->
   </div><!--end products-wrapper-->
  </div> <!--end.products-->
       
</template>
<script>
import Header from '../components/Header'

export default {
    name: '/products', 
    components: {
       Header,
    }
}

</script>

<style scoped>

  .products {
    background-color:#d3d3d3
  }
    h3 {
      color:black;
      font-size:16px;
    }
    .products-wrapper {
      width: 80%;
      margin: 0 auto;
      padding: 30px 0;
    }
   
    .single-container {
      text-align: center;

    }
    .single-container:hover {
      background-color: #d97676;
      border-radius: 7%;
      transition: 1s
    }
    .image-container {
      width:150px;
      margin: 0 auto
    }
    .image-container img{
      padding: 10px 0;
      width: 100px;
      display:block;
      cursor: pointer;
      margin: 0 auto;
    }
    .image-container:hover {
      transition: 1s;
      transform: scale(1.1);
    }
    .price {
      padding: 8px 0
    }
    .btn-wrapper button{
    padding: 3px 18px;
    cursor: pointer;
    border: 1px solid black;
    color: black;
    border-radius: 5px 10px;
    font-size: 14px;
  }

  .btn-wrapper button:hover {
    background-color: #cf0e0e;
    transition: 0.2s;
    color:white;
  }
  .products-container {
    display:flex;
    justify-content: space-between
  }

  @media screen and (max-width: 768px) {
    .products-container {
      display:grid;
      grid-template-columns: repeat(2,1fr)
      
    }
    .single-container {
      margin: 0 auto;
      width: 150px;
      
    }
    .btn-wrapper {
      padding-bottom: 20px;
    }
  }
</style>