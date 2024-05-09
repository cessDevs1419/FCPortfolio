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
        particles: {
            number: {
                value: 20
            },
            color: {
                value: "#3AB0FF"
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
                    min: 10,
                    max: 20
                }
            },
            move: {
                enable: true,
                speed: 2
            }
        },
        background: {
            color: ""
        },
        poisson: {
            enable: true
        }
    };

    loadParticles(configs);
</script>

<style>

    .github {
        bottom: 10px;
        right: 10px;
        position: fixed;
        border-radius: 10px;
        background: #fff;
        padding: 0 12px 6px 12px;
        border: 1px solid #000;
    }

    .github a:hover,
    .github a:link,
    .github a:visited,
    .github a:active {
        color: #000;
        text-decoration: none;
    }

    .github img {
        height: 30px;
    }

    .github #gh-project {
        font-size: 20px;
        padding-left: 5px;
        font-weight: bold;
        vertical-align: bottom;
    }

</style>