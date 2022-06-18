import Titulo from './Titulo'
import React, {useState} from 'react'
import phoneService from '../services/phoneService'

const AddNumber = ({phonebook, setPhonebook}) => {
    const allPhones = []
    phoneService.getAll().then(res => res.map(elem => allPhones.push(elem)))

    const getId = () => allPhones[allPhones.length-1].id+1

    const [fields, setFields] = useState({
        name: "", number: ""
    })

    const onChangeFields = event => {
        const valor = event.target.value
        if(event.target.id == "name") setFields({
                                        ...fields,
                                        name: valor
                                    })
        else setFields({
                ...fields,
                number: valor
            })
    }

    const agregarNumero = event => {
        event.preventDefault()
        const newObj = {
            ...fields,
            id : getId()
        }
        phoneService.addNew(newObj)
        setPhonebook(phonebook.concat(newObj))
    }

    return (
        <form onSubmit={agregarNumero}>
            <Titulo text="add new"/>
            <label>name: <input type="text" id="name" onChange={onChangeFields} placeholder="name"/></label><br/>
            <label>number: <input type="text" id="number" onChange={onChangeFields} placeholder="number"/></label><br/>
            <button>add</button>
        </form>
    )
}

export default AddNumber