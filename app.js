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
        },

        copy() {
            // creamos un elemento 'textarea' para poder copiar desde ahi al clipboard,
            const el = document.createElement('textarea');
            // lo ocultamos de la pantalla
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            // le asignamos el valor de la funcion computada en box.transform
            el.value = `transform: ${this.box.transform}`;
            // el elemento creado lo ponemos en cualquier lugar del (DOM) browser
            document.body.appendChild(el);
            // lo seleccionamos el contenido del elemento creado (textarea)
            el.select();
            // ejecutamos el comando copy
            document.execCommand('copy');
            // eliminamos el elemento creado y desplegado en el browser
            document.body.removeChild(el);
        }
    },
    props: {

    }
}).mount('#app');
