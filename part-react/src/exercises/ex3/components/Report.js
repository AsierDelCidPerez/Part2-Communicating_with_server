import Person from './Person';
import Header from './Header';

const Report = ({phonebook}) => {
    const [myPhone, setPhone] = phonebook
    return (
        <div>
            <Header text="Numbers"/>
            <ul>
                {myPhone.filtred.map(phone => <Person key={phone.id} phone={phone} myPhones={[myPhone, setPhone]}/>)}
            </ul>
        </div>
    )
}

export default Report;