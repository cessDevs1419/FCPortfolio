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
                
                <div class=" d-flex flex-column flex-md-row align-items-center justify-content-center m-auto mb-5">
                    <h5 class="fw-semibold intro-title m-0 me-md-3 me-0 text-center" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Im A</h5>
                    <h5 class="fw-semibold intro-title m-0 text-center" v-bind:class="[dark_mode ? 'text-white':'primary-font']">Front End Developer</h5>
                </div>
                <!-- <button class="btn btn-primary d-flex justify-content-between align-items-center rounded-4 secondary-color px-3 px-2" @click="openResume">
                    <span class="me-3">Download Resume</span>
                    <i class="bi bi-download fs-5 text-white"></i>
                </button> -->
    
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
        <div class="container-md">
            <h1 class="fw-bold about-title text-center mb-5" v-bind:class="[dark_mode ? 'text-white':'primary-font']" >My <span class="secondary-font fw-bold text-center">Projects</span></h1>
            <div class="row w-100 h-100 m-auto ">
                 <div class="col-auto m-auto mb-3 z-ult" v-for="(project, index) in projects" :key="index">
                    <div class="card border-0 box-shadow overflow-hidden border" v-bind:class="[dark_mode ? 'primary-color':'bg-white']">
                        <div class="row flex-column w-100 m-auto px0">
                            <div class="col-auto pt-3 d-flex align-items-center">
                                <div :id="'carouselExampleIndicators'+index" class="carousel slide  w-100 overflow-hidden">
                                    <div class="carousel-inner position-relative overflow-hidden align-items-center">
                                        <template  v-for="(images, index) in project.images" :key="index">
                                            <div class="carousel-item cursor-pointer card-img border overflow-y-auto" v-bind:class="index === 0 ? 'active':''" >
                                                <img :src="images" class=" h-100 w-100 my-auto" alt="projects">
                                            </div>
                                        </template>
                                        <div class="type px-3 py-2 position-absolute box-shadow top-0 mt-5 secondary-color text-white">
                                            <h5 class="m-0">{{project.type}}</h5>
                                        </div>
                                    </div>
                                    <template v-if="project.images.length > 1">
                                        <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleIndicators'+index" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleIndicators'+index" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </template>
        
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="card-body" v-bind:class="[dark_mode ? 'text-white':'primary-font']">
                                    <h5 class="card-title fw-bold">{{project.name}}</h5>
                                    <p class="card-text">{{project.description}}</p>
                                    <ul class="list-unstyled d-flex flex-wrap">
                                      <li class="tech cursor-pointer text-decoration-none px-3 mb-2 py-2 border border-2 m-auto rounded-4 " v-for="(tech, index) in project.technologies" :key="index" >
                                          {{ tech }}
                                      </li>
                                    </ul>
                                  </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    <!-- <div id="contact" class="full-height w-100 d-flex align-items-center primary-color" v-bind:class="[dark_mode ? 'primary-color':'bg-white']">
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
                        <button type="submit" class="btn w-100 btn-primary text-center d-flex justify-content-center align-items-center rounded-4 secondary-color px-3 px-2" >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div> -->
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
    <!-- <ParticlesComponent v-if="visible">
    </ParticlesComponent> -->
</template>

<script>
    import ShakingHands from '../components/icons/ShakingHands.vue'
    import ParticlesComponent from '../components/components/ParticlesComponent.vue'
    import GithubIcon from '../components/icons/GithubIcon.vue'
    import LinkedIcon from '@/components/icons/LinkedIcon.vue'
    import TelegramIcon from '@/components/icons/TelegramIcon.vue'

    import Technologies from '@/assets/data/technologies.js'
    import Projects from '@/assets/data/projects.js'

    export default {
        data () {
            return {
                form: {
                    email: '',
                    subject: '',
                    message: '',
                },
                technologies: Technologies,
                projects: Projects,
                visible: window.innerWidth >= 340,
                windowWidth: window.innerWidth
            }
        },
        watch: {
            windowWidth(newWidth) {
            this.visible = newWidth >= 340;
            }
        },
        mounted() {
            // Perform an initial check
            this.handleResize();
            
            // Add event listener for window resize
            window.addEventListener('resize', this.updateWindowWidth);
        },
        beforeUnmount() { // Use beforeUnmount if using Vue 3, otherwise use beforeDestroy for Vue 2
            // Remove event listener
            window.removeEventListener('resize', this.updateWindowWidth);
        },
        methods: {
            openResume(){
                var link = document.createElement('a');
                link.href = '../../public/File/Cillo_Francess_Resume.pdf'
                link.download = 'Cillo_Francess_Resume.pdf'; 
                link.click();
            },
            async submit() {
                console.log('submit', this.form)
            },
            handleResize() {
                this.windowWidth = window.innerWidth;
                this.visible = this.windowWidth >= 340;
            },
            getData(){
                console.log(this.projects)
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
        },
        created(){
            this.getData()
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

    .card{
        max-width: 600px;
        min-width: 250px
    }

    .tech{
        max-width: fit-content;
        min-width: fit-content;
    }

    .tech:hover{
        background-color: var(--accent-color);
        color: white;
        transition: .2s ease-in-out;
    }

    .card-img{
        max-height: 250px;
    }

    .card:hover{
        transform: scale(110%);
        transition: .2s ease-in-out;
        z-index: 1000;
    }
    @media screen and (max-width: 1035px) {
        .intro-title{
            font-size: 1.5rem;
        }
        .title{
            font-size: 4rem;
        }
    }
    @media screen and (max-width: 340px) {
        .about-title{
            font-size: 2rem;
        }
        .intro-title{
            font-size: 1rem;
        }
        .title{
            font-size: 3rem;
        }
    }
</style>