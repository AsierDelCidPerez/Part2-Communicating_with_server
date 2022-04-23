const Filtro = ({phonebook}) => {
    const [setFiltred, phoneBook] = phonebook;
    const filtrar = event => {
        setFiltred(phoneBook.filter(phone => phone.name.match(event.target.value)));
    }
    return (
        <label>filter shown with<input type="text" onChange={filtrar} placeholder="filtered"/></label>
    )
}
export default Filtro;