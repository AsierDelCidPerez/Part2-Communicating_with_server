import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(response => response.data)
const deletePhone = id => axios.delete(`${baseUrl}/${id}`)
const addNew = newObj => axios.post(baseUrl, newObj).then(response => response.data)

export default {getAll, deletePhone, addNew}
