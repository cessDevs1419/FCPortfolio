<template>
    <div class="hero w-100 primary-color" v-bind:class="[dark_mode ? 'primary-color':'bg-white']">

    </div>
    
</template>

<script>
    export default {
        props: {
            dark_mode: Boolean
        }    
    }
</script>

<style>
    .hero{
        min-height: 100vh
    }
</style>