import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/PageNotFound.css"

export default function PageNotFound() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {

    //         navigate("/");

    //     }, 5000);
    // }, [])


    return (
        <>
            <div className='pageNotFoundMainContainer'>

                <div className='errorContainerpageNotFound'>
                    <h1 className='headingPageNotFound'>
                        404
                    </h1>
                    <p className='friendPageNOtFound1'>
                        OH SNAP !
                    </p>
                </div>

                <div className='pageNotFoundRedirectionContainer'>

                    <div>
                        <span className='friendPageNOtFound2'>
                            The page you are looking for doesn't exist.
                        </span>
                        <hr></hr>
                        <span className='paraPageNotFound'>
                            Maybe you’ll find it in one of these categories:
                        </span>
                    </div>

                    <div className='NavigationsPageNotFound'>
                        <div>
                            <div>
                                <span>Men</span>
                            </div>
                            
                            <div>
                                <Link to="/">Topwear</Link>
                                <Link to="/">Footwear</Link>
                            </div>
                            <div>
                                <Link to="/">Bottomwear</Link>
                                <Link to="/">Bestsellers</Link>
                            </div>
                        </div>

                        <div>
                            <div>
                                <span>Women</span>
                            </div>
                            <div>
                                <Link to="/">Topwear</Link>
                                <Link to="/">Bestsellers</Link>
                            </div>
                            <div>
                                <Link to="/">Bottomwear</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}
