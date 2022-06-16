import personService from '../services/phonebook'
const deleting = id => personService.deletePhone(id)

const Person = ({name, tel, deleting, id}) => {
    const onDelete = event => deleting()
    return (<li>`${name} ${tel}`<button onClick={deleting}>Delete</button></li>);

};

export default Person;