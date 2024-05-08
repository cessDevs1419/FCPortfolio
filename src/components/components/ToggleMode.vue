<template>
    <button class="btn btn-dark px-2 py-2 primary-color box-shadow rounded-circle" v-bind:class="[mode ? 'bg-white':'primary-color']" type="button" @click="toggleMode">
        <div class="m-auto"
            v-if="mode" 
        >
            <LightModeIcon
                :height="29"
                :width="29"
            ></LightModeIcon>
        </div>
        <div class="m-auto"
            v-else
        >
            <DarkModeIcon
                :height="29"
                :width="29"
            ></DarkModeIcon>
        </div>
    </button>
</template>

<script>
    import DarkModeIcon from '../icons/DarkModeIcon.vue'
    import LightModeIcon from '../icons/LightModeIcon.vue'
    export default {
        name: 'ToggleMode',
        components:{
            LightModeIcon,
            DarkModeIcon
        },
        data(){
            return{
                mode: false
            }
        },
        methods:{
            toggleMode(){
                this.mode = !this.mode
                this.$emit('dark-mode', this.mode);
            }
        }
    }
</script>
