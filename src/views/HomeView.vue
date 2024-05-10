<template>
        <!-- <ParticlesComponent>
        </ParticlesComponent> -->
        <div class="hero d-flex align-items-center flex-lg-row flex-column  justify-content-around w-100 primary-color" v-bind:class="[dark_mode ? 'primary-color':'bg-white']">
            <div class="socmed h-100 w-25 ">
                <div class="socmed-border ms-5 rounded-5 border px-2 secondary-color"></div>
            </div>
            <div class="title-container w-100 d-flex flex-column align-items-center justify-content-center">
                <div class="intro-title d-flex m-auto">
                    <h5 class="fw-semibold intro-title  m-0 me-3" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Hello There</h5>
                    <ShakingHands
                        :height="43"
                        :width="43"
                    ></ShakingHands>
                </div>

                <h1 class="fw-bold title text-center" v-bind:class="[dark_mode ? 'text-white':'primary-font']" >Francess <span class="secondary-font fw-bold text-center">Cillo</span></h1>
                
                <div class="changing-roles d-flex m-auto mb-5">
                    <h5 class="fw-semibold intro-title m-0 me-3" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Im A</h5>
                    <h5 class="fw-semibold intro-title m-0" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Front End Developer</h5>
                </div>
                <button class="btn btn-primary d-flex justify-content-between align-items-center rounded-4 secondary-color px-3 px-2">
                    <span class="me-3">Download Resume</span>
                    <i class="bi bi-download fs-5 text-white"></i>
                </button>
            </div>
            <div class="chatbox h-100 w-25">

            </div>
        </div>
</template>

<script>
    import ShakingHands from '../components/icons/ShakingHands.vue'
    import ParticlesComponent from '../components/components/ParticlesComponent.vue'
    export default {
        components:{
            ShakingHands,
            ParticlesComponent
        },
        props: {
            dark_mode: Boolean
        }    
    }
</script>

<style>
    .hero{
        min-height: 100vh
    }
    .socmed-border{
        height: 15rem;
        width: .5rem;
    }
    .intro-title{
        font-size: 2rem;
    }
    .title{
        font-size: 6rem;
    }
</style>