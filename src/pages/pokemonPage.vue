<template>
    <div v-if="pokemonObjeto">
        <h2>Adivina el pokemon de la imagen</h2>
        <pokemonImagen ref="miHijo" :pokemonId="pokemonObjeto.id" :mostrarPokemon="pokemonShow" />
        <pokemonOpciones @seleccion="validarRespuesta($event)" :pokemons="pokemons" v-show="mostrarOpciones" />
    </div>
</template>

<script>
import pokemonImagen from '../components/pokemonImagen.vue'
import pokemonOpciones from '@/components/pokemonOpciones.vue'  // otra forma de importar
import { consultarPokemonsFachada, obtenerAleatorioFachada } from '@/client/PokemonClient.js'

export default {
    data() {
        return {
            pokemons: [],
            pokemonObjeto: null,
            pokemonShow: false,
            mostrarOpciones: true
        }
    },
    components: {
        pokemonImagen,
        pokemonOpciones
    },
    mounted() {
        console.log('Se monto en la pagina el componente pokemonPage')
        this.cargarJuego();
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    updated() {
        console.log('updated');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    methods: {
        async cargarJuego() {
            const arregloPokemons = await consultarPokemonsFachada();
            console.log(arregloPokemons);
            this.pokemons = arregloPokemons;

            const valorAleatorio = obtenerAleatorioFachada(0, 3);
            console.log("este es el aleatorio: " + valorAleatorio);
            const pokemonCorrecto = this.pokemons[valorAleatorio];
            this.pokemonObjeto = pokemonCorrecto;
        },
        validarRespuesta(valor) {
            console.log('llego el evento al padre');
            console.log(valor);
            const idSeleccionado = valor.identificador;
            if (this.pokemonObjeto.id === idSeleccionado) {
                console.log('Respuesta correcta');
                //this.pokemonShow = true;
                this.mostrarOpciones = false;
                this.pokemonShow= valor.valor2;

            } else {
                console.log('ERROR....................');
                this.pokemonShow = false;
            }
            const valorHijo = this.$refs.miHijo.pokemonId;
            console.log('valor del hijo por refs: ' + valorHijo);
            console.log('valor del hijo por data: ' + this.$refs.miHijo.propiedadPrueba);
            this.$refs.miHijo.metodoPrueba();
        }

    }

}
</script>

<style>
h2 {
    text-align: center;
    margin-top: 0;
}
</style>