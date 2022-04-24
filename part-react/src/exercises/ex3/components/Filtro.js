const Filtro = ({phonebook}) => {
    const [phoneBook, setPhonebook] = phonebook;
    const filtrar = event => {
        setPhonebook({
            ...phoneBook,
            filtred : phoneBook.report.filter(phone => phone.name.match(event.target.value))
        })
    }
    return (
        <label>filter shown with<input type="text" onChange={filtrar} placeholder="filtered"/></label>
    )
}
export default Filtro;