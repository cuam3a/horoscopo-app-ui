import React, { useState, useEffect } from 'react'

const URL_API = "https://horoscopo-app-api.vercel.app/api/";
export const useApi = (endpoint) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    useEffect(() => {
        setLoading(true)
        fetch(URL_API + endpoint)
            .then(data => data.json())
            .then(json => {
                setData(json)
                setLoading(false)
            })

    }, [])

    return { loading, data }
}