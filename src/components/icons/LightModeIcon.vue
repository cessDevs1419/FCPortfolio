<template>
    <svg :width="width" :height="height" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 27.667H19.6667" stroke="#3AB0FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.5" d="M5 23.667H23.6667" stroke="#3AB0FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 19.667H27.6667" stroke="#3AB0FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.5" d="M14.334 6.33301C9.91571 6.33301 6.33398 9.91473 6.33398 14.333C6.33398 16.3619 7.08925 18.2143 8.33399 19.6246H20.334C21.5787 18.2143 22.334 16.3619 22.334 14.333C22.334 9.91473 18.7523 6.33301 14.334 6.33301Z" stroke="#3AB0FF" stroke-width="2"/>
        <path opacity="0.5" d="M14.334 1V2.33333" stroke="#3AB0FF" stroke-width="2" stroke-linecap="round"/>
        <path opacity="0.5" d="M27.6673 14.333H26.334" stroke="#3AB0FF" stroke-width="2" stroke-linecap="round"/>
        <path opacity="0.5" d="M2.33333 14.333H1" stroke="#3AB0FF" stroke-width="2" stroke-linecap="round"/>
        <path opacity="0.5" d="M23.762 4.90625L23.2383 5.43002" stroke="#3AB0FF" stroke-width="2" stroke-linecap="round"/>
        <path opacity="0.5" d="M5.43004 5.43004L4.90625 4.90625" stroke="#3AB0FF" stroke-width="2" stroke-linecap="round"/>
    </svg>
</template>
<script>
    export default {
        props: {
            height: Number,
            width: Number,
            stroke: String
        }
    }
</script>