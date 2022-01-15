import axios from 'axios'

export function getClients() {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/clients`);
        return dispatch({
            type: 'GET_CLIENTS',
            payload: response.data
        })
    }
}

export function getOneClient(dni) {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/clients/${dni}`);
        return dispatch({
            type: 'GET_ONE_CLIENT',
            payload: response.data
        })
    }
}

export function createClient(client) {
    return async () => {
        try {
            const newClient = await axios
            alert(`Nuevo cliente creado con éxito! Bienvenido a Pragma, ${client.fullname} 🤙💪🧡`)
        }
        catch (error){
            console.log(error)
        }
    }
}

export function putOneClient(client) {
    return async () => {
        try {
            const update = await axios.put(`http://localhost:3001/clients/${client.dni}`, client)
            alert(`El cliente ${client.fullname} acaba de pagar y ponerse al día! 🧡💲✅`)
        }
        catch(error) {
            console.log(error)
        }
    }
}

export function putAllClients() {
    return async () => {
        try {
            const update = await axios.put(`http://localhost:3001/clients/`)
            alert(`Todos los clientes fueron puestos en rojo! 🧡❌🆘`)
        }
        catch(error){
            console.log(error)
        }
    }
}