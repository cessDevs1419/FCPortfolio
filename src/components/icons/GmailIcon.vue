<template>
    <a class="rounded-circle d-flex justify-content-center align-items-center socmed-icons" v-bind:class="[mode ? 'bg-white':'primary-color']">
        <svg :width="width" :height="height" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.3051 13.2029V42.5333C52.3051 44.4385 50.7611 45.9843 48.8559 45.9843H40.8014V26.4312L26.9994 36.7857L13.1973 26.4312V45.986H5.14456C3.23938 45.986 1.69531 44.4419 1.69531 42.5367V42.535V13.2046C1.69531 10.346 4.01225 8.02734 6.87087 8.02734C8.042 8.02734 9.122 8.41716 9.98937 9.07191L9.97588 9.06178L26.9994 21.8311L44.0229 9.06178C44.8768 8.41547 45.9568 8.02734 47.1279 8.02734C49.9865 8.02734 52.3051 10.3443 52.3051 13.2029Z" fill="#3AB0FF"/>
        </svg>   
    </a>
</template>
<script>
    export default{
        props: {
            mode: Boolean,
            height: Number,
            width: Number
        }
    }
</script>
