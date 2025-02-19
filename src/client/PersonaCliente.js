import axios from "axios";
const obtenerPorId = async (id) => {
    //http://localhost:8081/matriculaAPI/v1.1/personas/
   const data = await axios.get(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r => r.data);
   console.log(data);
   return data;
}
const insertar = async (body) => {   
    await axios.post('http://localhost:8081/matriculaAPI/v1.1/personas/', body).then(r => r.data);
}

const actualizar = async (id, body) => {   
    await axios.post(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, body).then(r => r.data);
}

const actualizarParcial = async (id, body) => {   
    await axios.patch(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, body).then(r => r.data);
}
const eliminar = async (id, body) => {   
    await axios.delete(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, body).then(r => r.data);
}


// Métodos fachada
export const obtenerPorIdFachada = async (id) => {
    console.log("obtenerPorIdFachada");
    return await obtenerPorId(id);
}

export const insertarFachada = async (body) => {   
    console.log("insertarFachada");
    return await insertar(body);
}

export const actualizarFachada = async (id, body) => {
    console.log("actualizarFachada");
    return await actualizar(id, body);
}

export const actualizarParcialFachada = async (id, body) => {
    console.log("actualizarParcialFachada");
    return await actualizarParcial(id, body);
}

export const eliminarFachada = async (id) => {
    console.log("eliminarFachada");
    return await eliminar(id);
}
