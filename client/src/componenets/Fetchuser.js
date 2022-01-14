import React from "react";
import { useState, useEffect } from "react";
export default function Product() {
    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getproducts = async () => {
            setloading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (componentMounted) {
                setdata(await response.clone().json());
                setfilter(await response.json());
                setloading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            };
        };
        getproducts();
    }, []);
    const Loading = () => {
        return <>Loading...</>;
    };
    const Users = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">

                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>

                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {product.name}
                                        </h5>
                                        <p className="card-text lead fw-bold">{product.price}</p>
                                        <a href="#" className="btn btn-outline-dark">
                                            Contact Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        );
    };
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Recent Successful User</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <Users />}
                </div>
            </div>
        </div>
    );
}