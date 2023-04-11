<template >
    <Header />
    <div class="contact">
        <div class="wrapper">
            <h3>We are open to all your questions and suggestions.
                <br> Let's achieve cooperation to mutual satisfaction.</h3>
                    <div class="contact-box">
                        <h2>Contact Us</h2>
                        <input v-model="name" type="text" class="field" placeholder="Your Name">
                        <p v-if="name_error">Your Name must have minimum 1 character...</p>
                        <input v-model="email" type="email" class="field" placeholder="Your Email">
                        <p v-if="email_error"> Your email must contain "@" character </p>
                        <input v-model="phone" type="number" class="field" placeholder="Your Phone"
                        >
                        <p v-if="phone_error"> Your phone must contains 9 character of numbers </p>
                        <textarea v-model="message" class="field" placeholder="Message ( optional )"></textarea>
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
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            message: "",

            name_error: false,
            email_error: false,
            phone_error: false
        }
    },
    methods: {
        contactUs() {
            //TODO validate data
            if(this.name.length < 1) {
                this.name_error = true
               
            } 
            if(this.email.indexOf("@") === -1) {
                this.email_error = true
            }
            if(this.phone.length < 9 ) {
                this.phone_error = true
                return
            }
            else {
                Swal.fire(
                'Success!',
                'Thaks for contacting us. We will answer as soon as possible!',
                'success'
                ).then(() => {
                    this.$router.push({path:'/'})
                })

                this.name = ""
                this.email = ""
                this.phone = ""
                this.message = ""

                this.name_error = ""
                this.email_error = ""
                this.phone_error = ""
                this.message_error = ""
            }
            
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
    .contact-box p {
        font-size: 8px;
        color:red;
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