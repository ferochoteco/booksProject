// Handle HTTP errors since fetch won't.
const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
        return response;
}

const fetchData = (url) => {
    return fetch(url)
        .then(handleErrors)
        .then(response => response.json())
        .catch(error => console.error(error)) 
}

export const fetchCategories = () => {
    const url = 'http://acamicaexample.herokuapp.com/categories'; 
    return fetchData(url); 
}

export const fetchBooksByCategory = (id, page, limit) => {
    const url = `http://acamicaexample.herokuapp.com/books?category_id=${id}&_page=${page}&_limit=${limit}`; 
    return fetchData(url); 
}