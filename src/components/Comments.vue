<template >
    <div class="comments">
        <div class="comment-box">
                <div class="wrapper">
                    <h2>LEAVE YOUR COMMENTS</h2>
                    <p> <i>Please let us know what you like or don't like about our web shop. </i></p>
                <form
                    v-if="this.$store.state.user !== null"
                    v-on:submit.prevent="addComment" class="comment-form">
                    <textarea v-model="commentText" rows="3" placeholder="Write Your Comment"> </textarea>
                    <button type="submit">Post Comment</button>
                </form>
                </div>
                <div v-if="$parent.product">
                    <div v-for="(comment, index) in $parent.product.comments" :key="index" class="user-comments" style="margin-bottom: 10px">
                    <div class="name">
                    <h4>{{ comment.username }}</h4>
                    </div> <!--end.name-->

                    <div class="rating-container">
                        <div class="star-icon">
                            <input type="radio" name="rating1" id="rating1">
                            <label for="rating1" class="fa fa-star"></label>
                            <input type="radio" name="rating1" id="rating2">
                            <label for="rating1" class="fa fa-star"></label>
                            <input type="radio" name="rating1" id="rating3">
                            <label for="rating1" class="fa fa-star"></label>
                            <input type="radio" name="rating1" id="rating4">
                            <label for="rating1" class="fa fa-star"></label>
                            <input type="radio" name="rating1" id="rating5">
                            <label for="rating1" class="fa fa-star"></label>
                        </div> <!--end.star-icon-->
                    </div> <!--end.raiting-container-->

                    <div class="review">
                        <p>
                            {{comment.comment }}    
                        </p>
                    </div>
                </div><!--end.user-comments-->
                
                </div>
           
                
            </div> <!--end.comment-box-->
    </div><!--end.comments-->
</template>
<script>
import ProductService from '../services/ProductService'

export default {
    name: 'Comments',
    data() {
        return {
            commentText: '',
            productService: new ProductService()
        }
    },
    methods: {
        addComment() {
            // if(!nekaVarijabla) // ulazi na: null, '', [], {}, undifiend, false


            if(!this.$parent.product.comments) {
                this.$parent.product.comments = [];
            }

            this.$parent.product.comments.push({
                "username": this.$store.state.user.email,
                "comment": this.commentText
            });

            this.productService.updateProduct(this.$parent.product.id, {
                'comments': this.$parent.product.comments,
            });
        }
    }
}
</script>
<style scoped>

.comments {
    background-color:#eae8e8;
    border: 1px solid red;
}
      .comment-box {
        width: 50%;
        margin: 0 auto;
        padding:30px 0;
        border-radius: 5px;
        font-size: 15px;
        
    }
    .comment-box p {
        padding: 5px 0;
    }
    .comment-form input, .comment-form textarea {
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
        outline: none;
        border: 1px solid #ddd;
        
    }
    .comment-form button{
    padding: 5px 15px;
    cursor: pointer;
    background-color: #878787;
    color: white;
    border-radius: 5px 10px;
    border: none;
    font-size: 12px;
    font-weight: bold;
    }

    .comment-form button:hover {
    background-color: #cf0e0e;
    transition: 0.2s;
    }

    .comment-form {
        padding-bottom: 20px;
    }

    .user-comments {
        background-color: white;
        box-shadow: 1px 1px 3px grey;
        border-radius: 5px;
    }
    .name{
        padding-top: 3px;
        margin-left: 10px;
    }
    .review p {
        margin-left: 10px;
        font-size:13px;
    }


    .rating-container {
        margin-left:10px;
        
    }
    .rating-container div{
        color:gold;
        font-size:13px;
        
    }

    .rating-container input {
        display:none;
    }
   
    .rating-container label{
        cursor: pointer;
    }
    .rating-container input:checked + label ~ label {
        color:red;
    }
    .review p {
        font-size:11px;
        font-weight:400;
    }
</style>