<template>
    <nav class="navbar navbar-expand-lg position-fixed w-100 z-ult" :class="{ ' box-shadow': isScrolled }" >
        <div class="navbar-container container-fluid d-flex justify-content-between " >
            <h1 class="navbar-brand fs-2 fw-bold z-ult" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#">F<span class="secondary-font fw-bold">C</span></h1>
            <button class="navbar-toggler z-ult" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="w-100 d-flex align-items-lg-center align-items-start flex-lg-row flex-column-reverse">
                    <div class="w-100 d-flex justify-content-start justify-content-lg-center">
                        <div class="navbar-nav z-ult">
                            <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#home" >Home</a>
                            <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#About" >About</a>
                            <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#Projects" >Project</a>
                            <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#Contact" >Contact</a>
                        </div>
                    </div>
                    <ToggleMode
                        @dark-mode="toggleDarkMode"
                    ></ToggleMode>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

    import ToggleMode from '../components/ToggleMode.vue'

    export default {
        name: 'NavbarComponent',
        components: {
                ToggleMode
            },
        data(){
            return{
                dark_mode: false,
                isScrolled: false,
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            toggleDarkMode(mode){
                this.dark_mode = mode
                this.$emit('dark-mode', mode);
            },
            handleScroll() {
                this.isScrolled = window.scrollY > 10; 
            }
        }

    }

</script>

<style>
    .btn-mode{
        width: 100%;
        max-width: 15px;
        min-width: 15px;
        height: 15px;
    }
    .navbar-container {
        transition: .3s ease-in-out;
        z-index: 20000;
    }

</style>