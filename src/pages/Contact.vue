<template >
    <Header />
    <div class="contact">
        <div class="wrapper">
            <h3>We are open to all your questions and suggestions.
                <br> Let's achieve cooperation to mutual satisfaction.</h3>
                    <div class="contact-box">
                        <h2>Contact Us</h2>
                        <input type="text" class="field" placeholder="Your Name">
                        <input type="email" class="field" placeholder="Your Email">
                        <input type="text" class="field" placeholder="Your Phone">
                        <textarea class="field" placeholder="Message"></textarea>
                        <button @click="contactUs" class="send">Send</button>
                    </div> <!--end.contact-box-->
        </div> <!--end.wrapper-->
        <Footer />
    </div> <!--end.contact-->
</template>

<script>
import Swal from '../../node_modules/sweetalert2';

export default {
    name: 'Contact',
    components: {
        Header,
        Footer
    },
    methods: {
        contactUs() {
            //TODO validate data


            Swal.fire(
                'Success!',
                'Thaks for contacting us. We will answer as soon as possible!',
                'success'
            )
        }
    },
}
import Header from '../components/Header'
import Footer from '../components/Footer'
</script>
<style scoped>
    .contact {
        background-color: #d3d3d3
    }
    .wrapper {
        padding: 20px 0;
        width: 80%;
        margin: 0 auto;
        
    }
    .wrapper h3 {
        color:black;
        text-align: center;
    }
    .contact-box {
        display:grid;
        width:300px;
        margin: 0 auto;
        padding: 20px 0;
    }
    .field {
        padding: 8px 0;
        margin:6px 0;
        
    }
    input::placeholder {
        padding-left: 10px;
    }
    textarea::placeholder {
        padding-left: 10px;
    }
    .send {
    padding: 5px 15px;
    cursor: pointer;
    background-color: #878787;
    color: white;
    border-radius: 5px 10px;
    border: none;
    font-size: 12px;
    font-weight: bold;
    }
    .send:hover {
    background-color: #cf0e0e;
    transition: 0.2s;
    }
</style>