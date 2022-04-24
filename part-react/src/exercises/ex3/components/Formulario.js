import React, {useState} from 'react';
import Header from './Header';

const Formulario = ({phonebook}) => {
    const [phoneBook, setPhonebook] = phonebook;
    const [fields, setFields] = useState({
        name : "", number : ""
    });
    const updateField = event => setFields({
            ...fields, [event.target.id] : event.target.value
    });
    
    const addNew = event => {
        event.preventDefault();
        setPhonebook({
            report : phoneBook.report.concat({
            name : fields.name, number : fields.number
        }), 
        filtred : phoneBook.filtred.concat({
            name : fields.name, number : fields.number
        })
        });
        setFields({
            name : "", number : ""
        });
    }
    return (
        <>
            <Header text="add a new"/>
            <form onSubmit={addNew}>
                <label>Name: <input type="text" id="name" onChange={updateField} value={fields.name} placeholder="name"/></label><br/>
                <label>Number: <input type="text" id="number" onChange={updateField} value={fields.number} placeholder="number"/></label>
                <button>add</button>
            </form>
        </>
    );
}
export default Formulario;