import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
    let[categories, setCategories] = useState([])

    let [selectedCategory, setSelectedCategory] = useState("")
    let [id, setId] = useState(null)

    const history = useHistory();

    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log("response--->", response)
            console.log(Object.keys(response.data)) // This gives you array of the keys from the response.data
            setCategories(Object.keys(response.data))
            setSelectedCategory(Object.keys(response.data)[1]) // This makes first one in the "select option" to be default
        })
        .catch(err => {
            console.log("Error Occur! ->", err)
        })
    }, [])

    const searchFormSubmit = (e) => {
        e.preventDefault();
        history.push(`/${id}`)
    }

    return (
        <div className='container'>
            <form onSubmit={searchFormSubmit} className='d-flex'>
                <div className='d-flex'>
                    <p className='p'>Find By ID#:</p>
                    <input onChange = {(e) => {setId(e.target.value)}} type="number" className='input-form search-input'/>
                </div>
                <button type='submit' className='search-btn'>
                    <i className='fas fa-search'></i>
                </button>
            </form>
        </div>
    );
};

export default SearchForm;