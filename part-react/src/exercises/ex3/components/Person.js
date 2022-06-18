import personService from '../services/phonebook'
const deleting = id => personService.deletePhone(id)

const Person = ({phone, myPhones}) => {
    const [phones, setPhones] = myPhones
    const onDelete = event => {
        if(window.confirm(`Really, do you want to delete ${phone.name}`)){ 
            deleting(phone.id)
            personService.getAll().then(res => setPhones(res))
        }
    }
    return (<li>{phone.name} {phone.number}&nbsp;<button onClick={onDelete}>Delete</button></li>);

};

export default Person;