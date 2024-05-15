<template>
    <div id="home" class="full-height w-100 d-flex align-items-center primary-color" v-bind:class="[dark_mode ? 'primary-color':'bg-white']">
        <div class="container-lg h-100 d-flex pt-5 align-items-center flex-lg-row flex-column ">
            <div class="socmed z-ult h-100">
                <div class="d-flex flex-lg-column mb-lg-0 mb-3 w-auto align-items-center justify-content-center">
                    <div class="socmed-border d-lg-flex d-none mb-3 rounded-5  px-2 secondary-color"></div>
                    <GithubIcon 
                        class="mb-lg-3 mb-0 mx-2"
                        :mode="dark_mode"
                        :height="40" 
                        :width="40" 
                    ></GithubIcon>
                    <LinkedIcon
                        class="mb-lg-3 mb-0 mx-2"
                        :mode="dark_mode"
                        :height="30" 
                        :width="30" 
                    ></LinkedIcon>
                    <TelegramIcon
                        class="mb-lg-3 mb-0 mx-2"
                        :mode="dark_mode"
                        :height="40" 
                        :width="40" 
                    ></TelegramIcon>
                </div>
            </div>
            <div class="title-container me-lg-5 me-0 z-ult w-100 d-flex flex-column align-items-center justify-content-center">
                <div class="intro-title d-flex align-items-center m-auto">
                    <h5 class="fw-semibold intro-title  m-0 me-3" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Hello, I'am</h5>
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
                <button class="btn btn-primary d-flex justify-content-between align-items-center rounded-4 secondary-color px-3 px-2" @click="openResume">
                    <span class="me-3">Download Resume</span>
                    <i class="bi bi-download fs-5 text-white"></i>
                </button>
    
            </div>
        </div>
    </div>
    <div id="about" class="full-height w-100 d-flex align-items-center primary-color" v-bind:class="[dark_mode ? 'primary-color':'bg-white']">
        <div class="container-lg ">
            <div class="row d-flex align-items-center w-100 m-auto">
                <div class="col-lg-5 d-lg-flex d-none">
                    <img class=" w-100 h-100" src="../assets/avatar1.png" alt="">
                </div>
                <div class="col-lg-7 h-100 z-ult text-lg-start text-center">
                    <h1 class="fw-bold about-title  mb-0" v-bind:class="[dark_mode ? 'text-white':'primary-font']" >About <span class="secondary-font fw-bold text-center">Me</span></h1>
                    <div class=" d-flex justify-content-lg-start justify-content-center align-items-center m-auto mb-3">
                        <h5 class="fw-semibold  m-0 me-3" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Get to know me</h5>
                    </div>
                    <p class="mb-5" v-bind:class="[dark_mode ? 'text-white':'primary-font']">
                        I graduated with a BSIT degree and have spent two years creating websites that adapt to different devices. I thrive in team settings and follow agile practices well. Integrating APIs and crafting front-end projects with Angular, React, and Vue.js are among my strengths. Currently, I'm diving into backend development using Laravel and Inertia to expand my expertise
                    </p>
                    <div class="technologies">
                        <div class=" d-flex justify-content-lg-start justify-content-center align-items-center m-auto mb-3">
                            <h5 class="fw-semibold  m-0 me-3" v-bind:class="[dark_mode ? 'text-white':'primary-font']"><span class="secondary-font fw-bold text-center">Technologies</span> I use</h5>
                        </div>
                        <div class="row d-flex justify-content-lg-start justify-content-center w-100 m-auto px-0">
                            <div class="col-auto px-0 " v-for="(logo, index) in technologies" :key="index">
                                <img class="img-icon " :src="logo" alt="">
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="projects" class="full-height w-100 d-flex align-items-center primary-color" v-bind:class="[dark_mode ? 'primary-color':'bg-white']">
    </div>
    <div id="contact" class="full-height w-100 d-flex align-items-center primary-color" v-bind:class="[dark_mode ? 'primary-color':'bg-white']">
        <div class="container-lg ">
            <div class="row d-flex align-items-center w-100 m-auto">
                <div class="col-lg-5 d-lg-flex d-none">
                    <img class=" w-100 h-100" src="../assets/avatar2.png" alt="">
                </div>
                <div class="col-lg-7 h-100 z-ult text-lg-start text-center">
                    <h1 class="fw-bold about-title  mb-0" v-bind:class="[dark_mode ? 'text-white':'primary-font']" >Contact <span class="secondary-font fw-bold text-center">Me</span></h1>
                    <div class=" d-flex justify-content-lg-start justify-content-center align-items-center m-auto mb-3">
                        <h5 class="fw-semibold  m-0 me-3" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Reach me out</h5>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="mb-3">
                            <label class="form-label" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Email address</label>
                            <input type="email" class="form-control bg-transparent" v-model="form.email" v-bind:class="[dark_mode ? 'text-white':'primary-font']">
                        </div>
                        <div class="mb-3">
                            <label  class="form-label" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Subject</label>
                            <input type="text" class="form-control bg-transparent" v-model="form.subject" v-bind:class="[dark_mode ? 'text-white':'primary-font']">
                        </div>
                        <div class="mb-3">
                            <label class="form-label" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Message</label>
                            <textarea class="form-control bg-transparent" rows="3" v-model="form.message" v-bind:class="[dark_mode ? 'text-white':'primary-font']"></textarea>
                        </div>
                        <button type="submit" class="btn w-100 btn-primary text-center d-flex justify-content-center align-items-center rounded-4 secondary-color px-3 px-2" @click="openResume">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="thanks full-height w-100 d-flex align-items-center primary-color" v-bind:class="[dark_mode ? 'primary-color':'bg-white']">
        <div class="container-md">
            <div class="title-container me-lg-5 me-0 z-ult w-100 d-flex flex-column align-items-center justify-content-center">
                <div class="intro-title d-flex align-items-center m-auto">
                    <ShakingHands
                        :height="43"
                        :width="43"
                    ></ShakingHands>
                </div>
    
                <h1 class="fw-bold title text-center" v-bind:class="[dark_mode ? 'text-white':'primary-font']" >Thank <span class="secondary-font fw-bold text-center">You</span></h1>
                
                <div class="changing-roles text-center d-flex m-auto mb-5">
                    <h5 class="fw-semibold intro-title m-0 me-3" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Thank you for taking an interest in my portfolio. Let's collaborate and build something incredible together!</h5>
                </div>
            </div>
        </div>
    </div>
    <ParticlesComponent>
    </ParticlesComponent>
</template>

<script>
    import ShakingHands from '../components/icons/ShakingHands.vue'
    import ParticlesComponent from '../components/components/ParticlesComponent.vue'
    import GithubIcon from '../components/icons/GithubIcon.vue'
    import LinkedIcon from '@/components/icons/LinkedIcon.vue'
    import TelegramIcon from '@/components/icons/TelegramIcon.vue'

    import htmlLogo from '../assets/technologies/html.png';
    import cssLogo from '../assets/technologies/css.png';
    import jsLogo from '../assets/technologies/javascript.png';
    import tsLogo from '../assets/technologies/typescript.png';
    import vscodeLogo from '../assets/technologies/visual-studio-code.png';
    import githubLogo from '../assets/technologies/github.png';
    import reactLogo from '../assets/technologies/react.png';
    import angularLogo from '../assets/technologies/angularjs.png';
    import vueLogo from '../assets/technologies/vue.png';
    
    
    export default {
        data () {
            return {
                technologies: [
                    htmlLogo,
                    cssLogo,
                    jsLogo,
                    tsLogo,
                    vscodeLogo,
                    githubLogo,
                    reactLogo,
                    angularLogo,
                    vueLogo,
                ],
                form: {
                    email: '',
                    subject: '',
                    message: '',
                }
            }
        },
        methods: {
            openResume(){
                var link = document.createElement('a');
                link.href = '../../public/File/Cillo_Francess_Resume.pdf'
                link.download = 'Cillo_Francess_Resume.pdf'; 
                link.click();
            },
            async submit() {
                this.$emit('submit', this.form)
            }
        },
        components:{
            ShakingHands,
            ParticlesComponent,
            GithubIcon,
            LinkedIcon,
            TelegramIcon
        },
        props: {
            dark_mode: Boolean
        }    
    }
</script>

<style>

    .full-height{
        min-height: 100vh;
        scroll-snap-align: start;
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
    .about-title{
        font-size: 4rem;
    }
    .img-icon{
        max-width: 5rem;
        min-width: 5rem;
        height: 5rem;
    }
    @media screen and (max-width: 1035px) {
        .intro-title{
            font-size: 1.5rem;
        }
        .title{
            font-size: 4rem;
        }
    }
</style>