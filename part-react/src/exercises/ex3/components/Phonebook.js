import Header from './Header';
import Formulario from './Formulario';
import React, {useState, useEffect, useInsertionEffect} from 'react';
import Report from './Report';
import Filtro from './Filtro';
import axios from 'axios';

const Phonebook = () => {
    const [phonebook, setPhonebook] = useState({
        report : [], filtred : []
    });
    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => setPhonebook({
                report : response.data, filtred: response.data
            }))
    }, [])
    
    return (
        <>
            <Header text="Phonebook"/>
            <Filtro phonebook={[phonebook, setPhonebook]}/>
            <Formulario phonebook={[phonebook, setPhonebook]}/>
            <Report phonebook={phonebook}/>
        </>
    )
}

export default Phonebook;