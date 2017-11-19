<template>
    <div>
        <circle-progress
            :size="120"
            :percent="11"
            :strokeWidth="20"
            strokeBg="#EDF5FB"
            strokeClr="#8FCFFF">
            123
        </circle-progress>
    </div>
</template>

<script>
    export default {
        name: "app",
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
</style>
