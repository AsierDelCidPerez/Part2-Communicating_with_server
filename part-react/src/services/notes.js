import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const nonExisting = {
        id: 1000,
        content: 'This note is not saved to server',
        date: '2022-06-16',
        important: true
    }
    return axios.get(baseUrl).then(response => response.data.concat(nonExisting))
}
const create = newObject => axios.post(baseUrl, newObject).then(response => response.data)
const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)

export default {getAll, create, update}