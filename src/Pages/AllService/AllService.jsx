import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import LoadingPage from '../LoadingPage/LoadingPage';

const AllService = () => {

    const [services, setServices] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [loading, setLoading] = useState(true); 

    const fetchServices = async () => {
        setLoading(true); 
        try {
            const res = await axios.get("https://service-scope-server-sigma.vercel.app/allService", {
                params: {
                    search: search.trim(),      
                    filter: category === "All" ? "" : category,
                },
            });
            setServices(res.data);
        } catch (err) {
            console.error("Failed to load services:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const delay = setTimeout(() => {
            fetchServices();
        }, 300);

        return () => clearTimeout(delay);
    }, [search, category]);


    return (
        <div className="py-16 px-6 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-700"> All Services</h2>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title, category or company..."
                    className="input input-bordered w-full md:w-1/2"
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="select select-bordered"
                >
                    <option value="All">All Categories</option>
                    <option value="Restaurants & Bars">Restaurants & Bars</option>
                    <option value="Home Services">Home Services</option>
                    <option value="Shopping & Fashion">Shopping & Fashion</option>
                    <option value="Health & Medical">Health & Medical</option>
                    <option value="Travel and Vacation">Travel and Vacation</option>
                    <option value="Money & Insurance">Money & Insurance</option>
                    <option value="Business Services">Business Services</option>
                    <option value="Electronics & Technology">Electronics & Technology</option>
                    <option value="Hobbies & Craft">Hobbies & Craft</option>
                </select>
            </div>

            {/* Show loading spinner while fetching data */}
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <LoadingPage/>  
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map(service => (
                                <tr key={service._id}>
                                    <td>
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td className="font-semibold">{service.title}</td>
                                    <td>{service.category}</td>
                                    <td>${service.price}</td>
                                    <td>
                                        <Link to={`/serviceDetails/${service._id}`}>
                                            <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700">See Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllService;