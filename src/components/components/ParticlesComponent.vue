<template>
</template>

<script setup>
    import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";
    import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm";

    async function loadParticles(options) {
        await loadAll(tsParticles);
        await tsParticles.load({ id: "tsparticles", options });
    }

    const configs = {
        fullScreen:{
            enable:true,
            zIndex:	0
        },
        particles: {
            number: {
                value: 30
            },
            color: {
                value: "#9FD9FF"
            },
            links: {
                enable: true,
                distance: 200,
                color: "#000000"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 1
            },
            size: {
                value: {
                    min: 0,
                    max: 20
                }
            },
            move: {
                enable: true,
                speed: 4
            }
        }
    };

    loadParticles(configs);
</script>

<style>
    canvas{
        z-index: -1;
    }
</style>