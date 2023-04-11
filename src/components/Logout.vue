<template lang="">
    <div></div>
</template>
<script>
export default {
    name: 'Logout',
    beforeCreate() {
        this.$store.dispatch('logout');

        this.$router.push({ path: '/login' })
    }
}
</script>
<style lang="">
    
</style>