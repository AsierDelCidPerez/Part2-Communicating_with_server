import React, {useState, useEffect} from 'react';
import Filtro from './components/Filtro'
import Titulo from './components/Titulo'
import Report from './components/Report'
import phoneService from './services/phoneService'
import Adding from './components/Adding'

const App = () => {
    const [phonebook, setPhoneBook] = useState([])
    /*
        phonebook is an array which contains objects related to the phones:
        i.e.
        phonebook = [
            {
                id: 1
                name: 'Arturo Hellas',
                phone: 963258741,
            },
            ...

        ]
    */
    useEffect(() => {
        phoneService.getAll().then(res => setPhoneBook(res))
    }, [])
    return (
        <div>
            <Titulo text="Phonebook"/>
            <Filtro phonebook={phonebook} setPhonebook={setPhoneBook}/>
            <Adding phonebook={phonebook} setPhonebook={setPhoneBook}/>
            <Report phonebook={[phonebook, setPhoneBook]}/>
        </div>
    )
}

export default App