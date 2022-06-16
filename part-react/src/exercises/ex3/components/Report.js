import Person from './Person';
import Header from './Header';

const Report = ({phonebook}) => {
    return (
        <div>
            <Header text="Numbers"/>
            <ul>
                {phonebook.filtred.map((phone, i) => <Person key={i} name={phone.name} tel={phone.number} id={phone}/>)}
            </ul>
        </div>
    )
}

export default Report;