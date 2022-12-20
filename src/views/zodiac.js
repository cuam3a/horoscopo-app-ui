import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useApi } from "../hooks/useApi";

const Zodiac = () => {
    const { name, day } = useParams();
    const { data, loading } = useApi("getZodiac/" + name + "/" + day)
    const [ text, setText ] = useState("");

    if(loading)
        return(<div>CARGANDO...</div>)

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex text-center font-bold">{ name.toUpperCase() }</div>
            <div className="mt-5 w-1/2">
                {data && JSON.stringify(data.result.replace(/(\n)/gm,"")) }
            </div>
        </div>
    );
};

export default Zodiac;
