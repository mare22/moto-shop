<template>
    <div class="header">
        <div class="navbar">
            <div class="wrapper">
                    <a href="" alt=""><img class="logo" src="../assets/images/logo.png"></a>
                    <nav>                            
                        <input type="checkbox" id="check">
                        <label for="check" class="hamburger-btn">
                            <i class="fas fa-bars" style="color: white;"></i>
                        </label>
                        <ul class="nav-list">
                            <li><a class="active" href="">HOME</a></li> 
                            <li><a class="active"  href="">ABOUT US</a></li>
                            <li><a class="active"  href="">NEWS</a></li>
                            <li><a class="active"  href="">CONTACT</a></li>
                            <li ><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
                        </ul>
                    </nav>
            </div> <!--end.wrapper-->
        </div> <!--end.navbar-->
    </div> <!--end.header-->
</template>
<script>
export default {
    name: 'header'
}
</script>
<style lang="">
    
</style>