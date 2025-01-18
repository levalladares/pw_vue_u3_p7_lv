<template>
    <div v-if="pokemonObjeto">
        <h2>Adivina el pokemon de la imagen</h2>
        <pokemonImagen :pokemonId="pokemonObjeto.id" :mostrarPokemon="pokemonShow" />
        <pokemonOpciones :pokemons="pokemons" />
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
            pokemonShow: false
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
    methods: {
        async cargarJuego() {
            const arregloPokemons = await consultarPokemonsFachada();
            console.log(arregloPokemons);
            this.pokemons = arregloPokemons;

            const valorAleatorio =obtenerAleatorioFachada(0, 3);
            console.log("este es el aleatorio: "+valorAleatorio);
            const pokemonCorrecto = this.pokemons[valorAleatorio];
            this.pokemonObjeto = pokemonCorrecto;
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