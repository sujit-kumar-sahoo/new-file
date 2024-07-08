import axios from "axios";
import React from "react";

export const getApiInvoke = async (url, res, next) =>{
    try 
    {
        const [isLoading, setLoading] = React.useState(false);
        //let response = await axios.get(url);
        //return response.data;


        axios.get(url)
            .then(response => {
                return response.data;
                setTimeout(() => {
                    setLoading(false);
                }, 2000)
            })
            .catch(error => {
                console.log(error);
            });






    } 
    catch (error) 
    {
        console.log(error);    
    }
}