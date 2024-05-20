<template> 
    <nav class="navbar navbar-expand-lg position-fixed w-100 z-nav" v-bind:class="[dark_mode ? 'background-dark ':'background-white', dark_mode ? (isScrolled ? 'primary-color box-shadow' : 'bg-transparent') : (isScrolled ? 'bg-white box-shadow' : 'bg-transparent')]"  >
        <div class="navbar-container container-fluid d-flex justify-content-between " >
            <h1 class="navbar-brand fs-2 fw-bold z-ult" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#">F<span class="secondary-font fw-bold">C</span></h1>
            <button class="navbar-toggler z-ult" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="w-100 d-flex align-items-lg-center align-items-start flex-lg-row flex-column-reverse">
                    <div class="w-100 d-flex justify-content-start justify-content-lg-center">
                        <div class="navbar-nav z-ult">
                            <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#home" >Home</a>
                            <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#about" >About</a>
                            <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#projects" >Projects</a>
                            <!-- <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#contact" >Contact</a> -->
                        </div>
                    </div>
                    <ToggleMode
                        @dark-mode="toggleDarkMode"
                    ></ToggleMode>
                </div>
            </div>
        </div>
    </nav>

      
    <div class="offcanvas offcanvas-start " v-bind:class="[dark_mode ? 'background-dark ':'background-white',]" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-body">        

          <div class="container px-0 py-5 mt-5">
            <ToggleMode
                class="mb-3"
                data-bs-dismiss="offcanvas"
                @dark-mode="toggleDarkMode"
            ></ToggleMode>
            <div class="w-100 d-flex justify-content-start justify-content-lg-center">
                <div class="navbar-nav z-ult">
                    <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#home" >Home</a>
                    <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#about" >About</a>
                    <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#projects" >Projects</a>
                    <a class="nav-link fw-semibold m-0 cursor-pointer" v-bind:class="[dark_mode ? 'text-white':'primary-font']" href="#contact" >Contact</a>
                </div>
            </div>
          </div>
        </div>
    </div>
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
                navmode: ''
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
    .navbar {
        transition: .3s ease-in-out;
    }

    @media screen and (max-width: 992px) {
        .navbar{
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .background-white{
            background-color: white;
        }
        .background-dark{
            background-color: var(--primary-color);
        }
    }
</style>