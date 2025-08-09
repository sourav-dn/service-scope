import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import LoadingPage from "../LoadingPage/LoadingPage";

const AllService = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default"); // default | price-asc | price-desc
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://service-scope-server-sigma.vercel.app/allService",
        {
          params: {
            search: search.trim(),
            filter: category === "All" ? "" : category,
          },
        }
      );
      setServices(res.data || []);
    } catch (err) {
      console.error("Failed to load services:", err);
      setServices([]);
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

  // client-side sorting
  const displayedServices = useMemo(() => {
    const arr = [...services];
    if (sortBy === "price-asc") {
      arr.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "price-desc") {
      arr.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return arr;
  }, [services, sortBy]);

  return (
    <div className="py-16 px-6 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        All Services
      </h2>

      {/* Controls */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-10">
        {/* <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title, category or company..."
          className="input input-bordered w-full md:w-1/2"
        /> */}

        <div className="flex gap-3 w-full md:w-auto">
          {/* <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-1/2 md:w-auto"
          >
            <option value="All">All Categories</option>
            <option value="Restaurants & Bars">Restaurants & Bars</option>
            <option value="Home Services">Home Services</option>
            <option value="Shopping & Fashion">Shopping & Fashion</option>
            <option value="Health & Medical">Health & Medical</option>
            <option value="Travel and Vacation">Travel and Vacation</option>
            <option value="Money & Insurance">Money & Insurance</option>
            <option value="Business Services">Business Services</option>
            <option value="Electronics & Technology">
              Electronics & Technology
            </option>
            <option value="Hobbies & Craft">Hobbies & Craft</option>
          </select> */}

          {/* Sort control */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered w-1/2 md:w-auto"
            aria-label="Sort services"
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[40vh]">
          <LoadingPage />
        </div>
      ) : displayedServices.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          No services found. Try a different search or filter.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => (
            <div
              key={service._id}
              className="card bg-base-100 shadow-md border h-full"
            >
              {/* Fixed image area for consistent card height */}
              <figure className="h-full w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>

              {/* Make body stretch so actions align bottom */}
              <div className="card-body flex flex-col">
                <h3 className="card-title text-base line-clamp-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {service.category || "Uncategorized"}
                </p>

                <div className="mt-2 font-semibold text-blue-700">
                  ${Number(service.price).toFixed(2)}
                </div>

                {/* Spacer to push actions to bottom for equal height */}
                <div className="flex-1" />

                <div className="card-actions">
                  <Link to={`/serviceDetails/${service._id}`} className="w-full">
                    <button className="btn btn-primary btn-block">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllService;
