import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Actors = () => {
    const [actors, setActors] = useState([]);
    const [error, setErrors] = useState("");

    useEffect(() => {
        const sender = async () => {
            return await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
                setActors(res.data);
            }, (error) => {
                console.log(error);
                setErrors(error.message);
            });
        }
        sender();
    }, []);

    if (!error) {
        return (
            <div>
                <h1> List of Actors </h1>
                <ul style={{ listStyle: "none" }}>
                    {actors.map((a, i) => {
                        return (
                            <li key={i}>
                                <p>Id : {a.id}</p>
                                <p>Name : {a.name}</p>
                                <p>User Name : {a.username}</p>
                                <p>Email : {a.email}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
    return (
        <p> {error} </p>
    )

};

export default Actors;