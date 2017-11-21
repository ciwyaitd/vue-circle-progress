<template>
    <div
        class="circle-progress"
        :style="{
            height: size + 'px',
        }">
        <svg
            :width="svgSize"
            :height="svgSize"
            :class="'circle-svg circle-' + beginAt"
            viewport="0 0 1 1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">

            <circle
                class="circle-fill"
                :r="radius - thick / 2"
                cx="50%"
                cy="50%"
                :fill="fill"
            ></circle>

            <circle
                :r="radius"
                cx="50%"
                cy="50%"
                fill="transparent"
                :stroke-width="thick"
                :stroke-dasharray="perimeter"
                :stroke="bg"
                stroke-dashoffset="0"
                :style="{
                    transition: transition,
                    strokeDashoffset: 0
                }"
            ></circle>

            <circle
                class="circle-fill"
                :style="{
                    strokeDashoffset: percentPerimeter,
                    transition: transition
                }"
                :r="radius"
                cx="50%"
                cy="50%"
                fill="transparent"
                :stroke-width="thick"
                :stroke-dasharray="perimeter"
                :stroke="fg"
                stroke-dashoffset="0"
            ></circle>
        </svg>

        <div class="center-box">
            <div class="center-box-cell">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        props: {
            size: {
                type: Number,
                default: 100
            },
            percent: {
                type: Number,
                default: 0
            },
            fill: {
                type: String,
                default: 'transparent'
            },
            thick: {
                type: Number,
                default: 0
            },
            bg: String,
            fg: String,
            beginAt: {
                type: String,
                default: 'top'
            },
            duration: {
                type: Number,
                default: 1000
            },
            timingFunction: {
                type: String,
                default: 'linear'
            }
        },

        computed: {
            svgSize() {
                return !isNaN(this.size) ? this.size : 100
            },
            perimeter() {
                return this.radius * 2 * Math.PI
            },
            percentPerimeter() {
                let percent = this.percent > 0 ? Math.min(100, this.percent) : 0
                return (1 - Number(percent) / 100) * this.perimeter
            },
            radius() {
                return this.svgSize / 2 - this.thick / 2
            },
            transition() {
                return 'stroke-dashoffset ' + this.duration + 'ms ' + this.timingFunction
            },
        },

        install(Vue, options = {}) {
            let tagName = options.tagName || 'circle-progress'
            Vue.component(tagName, this)
        },
    }
</script>

<style scoped>
    .circle-progress {
        display: inline-block;
        position: relative;
        line-height: 1;
    }

    .circle-svg {
        vertical-align: middle;
    }

    .circle-top {
        transform: rotate(-90deg);
    }

    .circle-bottom {
        transform: rotate(90deg);
    }

    .circle-left {
        transform: rotate(-180deg);
    }

    .center-box {
        position: absolute;
        display: table;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .center-box-cell {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
</style>
