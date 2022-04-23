import Header from './Header';
import Formulario from './Formulario';
import React, {useState} from 'react';
import Report from './Report';
import Filtro from './Filtro';

const Phonebook = () => {
    const [phonebook, setPhonebook] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]);
    const [filtredPhones, setFiltredPhones] = useState(phonebook);
    return (
        <>
            <Header text="Phonebook"/>
            <Filtro phonebook={[setFiltredPhones, phonebook]}/>
            <Formulario phonebook={[phonebook, setPhonebook, filtredPhones, setFiltredPhones]}/>
            <Report phonebook={filtredPhones}/>
        </>
    )
}

export default Phonebook;