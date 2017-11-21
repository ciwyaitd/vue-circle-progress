<template>
    <div id="app">
        <h1 class="title" title="VUE Circle Progress">VUE Circle Progress</h1>
        <circle-progress
            :size="size"
            :percent="percent"
            :thick="thick"
            :bg="bg"
            :fg="fg"
            :fill="fill"
            :duration="duration"
            :beginAt="beginAt">
            <a
                class="github-button"
                href="https://github.com/ciwyaitd/vue-circle-progress"
                data-size="large"
                data-show-count="true"
                aria-label="Star ciwyaitd/vue-circle-progress on GitHub">Star</a>
        </circle-progress>

        <div class="control">
            <div>
                <label>
                    <span>size </span>
                    <input type="number" v-model.number="size">
                </label>
                <label>
                    <span>percent </span>
                    <input type="number" v-model.number="percent">
                </label>
                <label>
                    <span>thick </span>
                    <input type="number" v-model.number="thick">
                </label>
                <label>
                    <span>bg </span>
                    <input type="color" v-model="bg">
                </label>
                <label>
                    <span>fg </span>
                    <input type="color" v-model="fg">
                </label>
                <label>
                    <span>fill </span>
                    <input type="color" v-model="fill">
                </label>
                <label>
                    <span>duration </span>
                    <input type="number" v-model.number="duration">
                </label>
                <label>
                    <span>beginAt </span>
                    <select v-model="beginAt">
                        <option value="top">top</option>
                        <option value="left">left</option>
                        <option value="right">right</option>
                        <option value="bottom">bottom</option>
                    </select>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                size: 260,
                percent: 12,
                thick: 30,
                bg: '#EDF5FB',
                fg: '#8FCFFf',
                fill: 'transparent',
                duration: 1000,
                beginAt: 'top',
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    #app {
        padding-top: 100px;
        height: calc(100vh - 100px);
        line-height: calc(100vh - 100px);
        background-color: #f7f8fa;
        background-image:
            linear-gradient(90deg, rgba(255, 255, 255, .07) 50%, transparent 50%),
            linear-gradient(90deg, rgba(255, 255, 255, .13) 50%, transparent 50%),
            linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, .17) 50%),
            linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, .19) 50%);
        background-size: 13px, 29px, 37px, 53px;
        text-align: center;
        overflow: hidden;
    }

    .circle-progress {
        vertical-align: middle;
    }

    .title {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 0;
    }

    .title::before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        background-color: rgba(0, 0, 0, .1);
        filter: blur(4px);
        z-index: 0;
    }

    .title::after {
        content: "" attr(title) "";
        font-size: 54px;
        color: #fff;
        text-shadow: 0 1px 0 #9f9a7d, 0 2px 0 #7e7a64, 0 3px 0 #54513f;
        position: relative;
        z-index: 2;
        line-height: 100px;
    }

    .control {
        margin-left: 120px;
        display: inline-block;
        vertical-align: middle;
    }

    .control label {
        margin-bottom: 20px;
        font-size: 0;
        display: block;
        line-height: 1;
    }

    .control input,
    .control select {
        border: 1px solid #dfe2e5;
        height: 38px;
        line-height: 38px;
        font-size: 22px;
        text-indent: 10px;
        width: 200px;
        vertical-align: middle;
        border-radius: 4px;
    }

    .control span {
        margin-right: 15px;
        font-size: 20px;
        color: #586069;
        vertical-align: middle;
        display: inline-block;
        width: 120px;
        text-align: right;
    }
</style>
