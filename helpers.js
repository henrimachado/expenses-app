
//Local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}



//delete items
export const deleteItem = ({ key, id }) => {
    const existingData = fetchData(key);
    if (id) {
        const newData = existingData.filter((item) => item.id !== id);
        return localStorage.setItem(key, JSON.stringify(newData));
    }
    return localStorage.removeItem(key);

}


//get all items from local storage
export const getAllMatchingItems = ({ category, key, value }) => {
    const data = fetchData(category) ?? [];
    return data.filter((item) => item[key] === value);
}


//Create expense
export const createExpense = ({
    name, amount, date, category
}) => {
    const newItem = {
        // Função do js que cria um id criptografado aleatório
        id: crypto.randomUUID(),
        name: name,
        amount: +amount,
        date: Date.parse(date),
        createdAt: Date.now(),
        category: category

    }
    const existingExpenses = fetchData("expenses") ?? [] //verifica se tem alguma expense e se não tiver, devolve um array vazio
    return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]))
}


//Formating dates
export const formatDateToLocaleString = (epoch) => new Date(epoch).toLocaleDateString();

//format currency
export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "BRL"
    })
}
