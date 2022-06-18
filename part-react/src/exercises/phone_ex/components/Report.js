import phoneService from '../services/phoneService'
import Titulo from './Titulo'


const Report = ({phonebook}) => {
    const [phones, setPhones] = phonebook
    
    const deletePhone = event => {
        if(window.confirm(`Are you sure you want to delete: ${event.target.name}`)){
            phoneService.deletePhone(event.target.id)
            setPhones(phones.filter(phone => phone.id != event.target.id))
        }

    }

    return (
        <div>
            <Titulo text="Numbers"/>
            <ul>
                {
                    phones.map(phone => <li key={phone.id}>{phone.name} {phone.number}&nbsp; <button name={phone.name} id={phone.id} onClick={deletePhone}>Delete</button></li>)
                }
            </ul>
        </div>
    )
}

export default Report