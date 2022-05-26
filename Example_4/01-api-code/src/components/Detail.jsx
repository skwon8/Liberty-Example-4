import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {

    const { category, id } = useParams();

    let [ info, setInfo] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log("Response from getting details", response)
            setInfo(response.data)
        })
        .catch(err => console.log(err))
    }, [category, id])

    return (
        <div className='design-title2'>
            <h1><u>Post Title</u>: <span className='form-body'>{info.title}</span></h1> <br/>
            <h1><u>Body</u>: <span className='form-body'>{info.body}</span> </h1>
        </div>
    );
};

export default Detail;