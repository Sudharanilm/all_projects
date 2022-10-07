import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { BsArrowRight } from "react-icons/bs";
import pic10 from '../images/img_10.png'


const Home = () => {
    const [apiData, setApiData] = useState([])

    const getApiUsers = async () => {
        try {
            const apiData = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            console.log("users images", apiData.data)
            setApiData(apiData.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getApiUsers();
    }, [])
    return (
        <div className='grid grid-cols-5 bg-orange-400 w-94 p-12 ml-12 mr-12 mt-12'>
            {
                apiData.map((item) => {
                    return (
                        <>
                            <div key={item.Id} className="pl-4 w-64 mt-2 mb-2 flex flex-warp text-ellipsis bg-white justify-center">

                                <Link to={"/Base"}
                                    state={item.id}>
                                    <img className='rounded-full w-20 h-20' src={pic10} alt="pic" />
                                    {/* </Link> */}
                                    <p className='font-extrabold'>{item.name}</p>
                                    <p className='font-bold'>{item.email}</p>
                                    <p className='font-bold'>{item.username}</p>
                                    <p className='font-bold'>{item.address.city}</p>
                                    <p className='font-bold'>{item.website}</p>
                                    {/* <Link to={"/Base"}
                                        state={item.id}> */}
                                    <div className='flex flex-warp pb-2'>
                                        <button className='bg-sky-200 hover:bg-cyan-400'> <BsArrowRight size='2rem' /></button>
                                    </div>
                                </Link>

                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}
export default Home;