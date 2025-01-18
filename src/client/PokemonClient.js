function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const obtenerArregloNumerico = () => {
    const arreglo = [];
    for (let i = 0; i < 4; i++) {
        arreglo[i] = obtenerAleatorio(1, 600);
    }
    return arreglo;
}
const obtenerArregloPokemon = async (arreglo) => {
    const nom1 = await consumirApi(arreglo[0]);
    const nom2 = await consumirApi(arreglo[1]);
    const nom3 = await consumirApi(arreglo[2]);
    const nom4 = await consumirApi(arreglo[3]);

    const obj1 = {
        id: arreglo[0],
        nombre: nom1
    }
    const obj2 = {
        id: arreglo[1],
        nombre: nom2
    }
    const obj3 = {
        id: arreglo[2],
        nombre: nom3
    }
    const obj4 = {
        id: arreglo[3],
        nombre: nom4
    }

    const arregloPokemons = [obj1, obj2, obj3, obj4];
    return arregloPokemons;
}
const consumirApi = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
    return data.name;
}
const consultarPokemons = async () => {
    return await obtenerArregloPokemon(obtenerArregloNumerico());
}
//FACHADAS
export const consultarPokemonsFachada = async () => {  // buena practica
    return await consultarPokemons();
}
export function obtenerAleatorioFachada(min, max) {
    return obtenerAleatorio(min, max);
}

//CUANDO QUIERO EXPORTAR UNA FUNCION	
//export default consultarPokemonsFachada; // exportar la funcion que se va a usar en el componente
