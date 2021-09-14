import React from 'react';
import useLoading from '../hooks/useLoading';
const Speaks= ({count})=>{
    console.log('url',count);
    const url=`https://www.breakingbadapi.com/api/quotes/${count}`;
    const {data, loading}=useLoading(url);
    const {author,quote}= !! data && data[0];
    console.log('data',author, quote);
    return !loading?
        <>
            <h3>{author}</h3>
            <p>{quote}</p>
        </>
    :<h2>Loading...</h2>;
};
export default Speaks;