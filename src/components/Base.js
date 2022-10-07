import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

const Base = () => {
    const { state } = useLocation();

    const [userApi, setUser] = useState([])

    const getApiUsers = async () => {
        try {
            const userApi = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${state}`)
            console.log(userApi.data)
            setUser(userApi.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getApiUsers()
    })
    return (
        <>
            {/* <div className='justify-end'><h1>User Details</h1> */}
            <div className='grid gap-2 grid-cols-4 grid-rows-2 m-10'>
                {
                    userApi.map((item, index) => {

                        return (
                            <div className='rounded border border-sky-500 p-1 m-1' key={index}>
                                <p >{item.id}</p>
                                <p className='font-bold'> {item.title}</p>
                                <p>{item.body}</p>

                            </div>

                        )
                    })
                }
            </div>
            {/* </div> */}
        </>
    )
}

export default Base