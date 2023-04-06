let vm = Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotatex: 0,
            rotatey: 0,
            rotatez: 0,
        }
    },
    computed: {
        box() {
            return {
                transform: `
                    perspective(${this.perspective}px)
                    rotateX(${this.rotatex}deg)
                    rotateY(${this.rotatey}deg)
                    rotateZ(${this.rotatez}deg)
                `
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 100;
            this.rotatex = 0;
            this.rotatey = 0;
            this.rotatez = 0;
        }
    },
    props: {

    }
}).mount('#app');
