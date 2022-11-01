import React, { useEffect, useState } from "react";


const Data = () =>{
    let isLoading = true;

   

    let API = "https://dummyjson.com/products"

    const fetchApiData = async(url) =>{
        try{
         const res = await fetch(url);
         const resdata = await res.json();
         console.log(resdata);
        }catch(error){
            console.log(error);
        }
        
    };


    useEffect(() =>{
        fetchApiData(API);


    },[]);

    if (isLoading){
        return(
            <>
                <h2>Loading...</h2>
            </>
        )
    }

    


    return(
        <div>
            <h2>My Data</h2>
        </div>
    )
}

export default Data;