import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        getData(url);
    }, [url]);

    const getData = async () => {
        try {
            const { data } = await axios.get(url);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    return { data, getData };
};

export default useFetchData;
