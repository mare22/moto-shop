<template>
    <!--<div v-if="user.email == 'admin@admin.com'" class="admin">-->
        <div class="wrapper">
            <h2>HELLO ADMIN</h2>
            <h4>Please fill the fields below to add a new product:</h4>
                <div class="select">
                    <p>Select category:</p>
                        <select id="categories" class="categories">
                            <option value="HL">HELMETS</option>
                            <option value="SH">SHOES</option>
                            <option value="ACC">ACCESSORIES</option>
                            <option value="JCT">JACKETS</option>
                            <option value="GL">GLOVES</option>
                        </select>
                </div><!--end.select-->
                <div class="desc">
                    <p>Description:</p>
                    <textarea class="text" rows="3"> </textarea>
                    
                </div>
                <div class="img">
                    <p>Image:</p>
                    <input type="text" class="url">
                </div>
                
                <div class="name">
                    <p>Name:</p>
                    <input type="text" class="name">
                </div>
                <div class="price">
                    <p>Price:</p>
                    <input type="text" class="pr">
                </div>
                <button class="add" type="submit">Add new prodcuct</button>
        </div> <!--end.wrapper-->
    
</template>
<script>
export default {
    name: 'Admin'
}
</script>
<style scoped>
    .wrapper h2 {
        font-size:17px;
    }
    .wrapper h4 {
        font-weight: 400;
        font-size:15px;
        padding-bottom:10px;
    }
    .select {
        display:flex;
        margin:0 10px;
    }
    .categories {
        font-size:10px;
    }
   
    .wrapper {
        width:50%;
        margin: 0 auto;
        text-align: center;
        background-color: #9e9ee8;
        border-radius:5px;
        padding:20px 0;
        margin-top:20px;
    }
    .select p {
        margin-right: 10px; 
    }
    .desc p {
        margin-left: 10px; 
    }
    .desc {
        display:flex;
        padding: 10px 0;
    }
    .text {
        width:200px;
        margin-left:10px;
        
    }
    .img {
        display:flex;
        padding-bottom: 10px;
    }
    .img p{
        margin-left: 10px; 
    }
    .url {
        margin-left: 10px;
    }
    .name {
        display:flex;
        margin-left: 10px;
        margin-bottom: 7px;
    }
    .price {
        display:flex;
        
    }
    .price p {
        margin-left:10px;
    }
    .pr {
        margin-left:17px;
        margin-bottom:20px;
    }
    .add {
    padding: 5px 15px;
    cursor: pointer;
    background-color: #878787;
    color: white;
    border-radius: 5px 10px;
    border: none;
    font-size: 12px;
    font-weight: bold;
    }
    .add:hover  {
    background-color: #cf0e0e;
    transition: 0.2s;
    
    }

    @media screen and (min-width:320px) and (max-width: 620px) {
        .wrapper h2 {
        font-size:17px;
    }
    .wrapper h4 {
        font-weight: 400;
        font-size:15px;
        padding-bottom:10px;
    }
    .select {
        display:block;
        margin:0 10px;
    }
    .categories {
        font-size:13px;
    }
   
    .wrapper {
        width:50%;
        margin: 0 auto;
        text-align: center;
        background-color: #9e9ee8;
        border-radius:5px;
        padding:20px 0;
        margin-top:20px;
    }
    .select p {
        text-align:center;
    }
    .desc p {
        margin-left: 10px; 
    }
    .desc {
        display:block;
        padding: 10px 0;
    }
    .text {
        width:130px;
        margin-left:10px;
        
    }
    .img {
        display:block;
        padding-bottom: 10px;
        margin: 0 auto;
    }
    .img p{
       text-align:center;
    }
    .url {
        margin-left: 0px;
    }
    .name {
        display:block;
        margin: 0 auto;
    }
    .price {
        display:block;
        margin: 0 auto;
    }
    .price p {
        text-align:center;
    }

    .pr {
        margin: 0 auto;

    }
    .add {
        margin-top: 10px;
    }
}
</style>