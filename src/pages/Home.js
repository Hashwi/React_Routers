
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products')
    }
    return (
        <>
            <div>
                <h1>Home</h1>
                <p>
                    Go To < Link to='products'> the list of products.</Link></p>

                <p>
                    <button onClick={navigateHandler}>Navigate</button>
                </p>
            </div>
        </>
    )
}

export default HomePage;