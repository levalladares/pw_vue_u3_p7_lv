import axios from "axios";
const obtenerPorId = async (id) => {
    //http://localhost:8081/matriculaAPI/v1.1/personas/
   const data = await axios.get(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r => r.data);
   console.log(data);
   return data;
}
const insertar = async (body) => {   
    axios.post('http://localhost:8081/matriculaAPI/v1.1/personas/', body).then(r => r.data);
}

const actualizar = async (body) => {   
    axios.post('http://localhost:8081/matriculaAPI/v1.1/personas/{id}', body).then(r => r.data);
}
const actualizarParcial = async (body) => {   
    axios.patch('http://localhost:8081/matriculaAPI/v1.1/personas/{id}', body).then(r => r.data);
}
const eliminar = async (body) => {   
    axios.delete('http://localhost:8081/matriculaAPI/v1.1/personas/{id}', body).then(r => r.data);
}



//metodo fachada
export const obtenerPorIdFachada = async (id) => {
    console.log("obtenerPorIdFachada");
    return await obtenerPorId(id);
}

export const insertarFachada = async (body) => {   
    return await insertar(body);
}