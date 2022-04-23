import Person from './Person';
import Header from './Header';

const Report = ({phonebook}) => {
    return (
        <div>
            <Header text="Numbers"/>
            <ul>
                {phonebook.map((phone, i) => <li key={i}><Person name={phone.name} tel={phone.number}/></li>)}
            </ul>
        </div>
    )
}

export default Report;