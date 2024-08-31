import Banner from "../components/Banner";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import NewLetter from "../components/NewLetter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setjobs] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const itemsperpage = 6;
  useEffect(() => {
    setIsloading(true);

    fetch("https://job-portal-delta-five.vercel.app/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setjobs(data);
        setIsloading(false);
      });
  }, []);
  // console.log(jobs);
  //Handling input changes
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // console.log(query);
  // filtering jobs by searching
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log(filteredItems);
  //Radio filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  //button Based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //Calculate the main change
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsperpage;
    const endIndex = startIndex + itemsperpage;
    return { startIndex, endIndex };
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsperpage)) {
      setcurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  //Main functions
  const filterdData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    //Filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }
    //Category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) => {
          jobLocation.toLowerCase() === selected.toLowerCase() ||
            parseInt(maxPrice) <= parseInt(selected) ||
            postingDate >= selected ||
            salaryType.toLowerCase() === selected.toLowerCase() ||
            experienceLevel.toLowerCase() === selected.toLowerCase() ||
            employmentType.toLowerCase() === selected.toLowerCase();
        }
      );
      console.log(filteredJobs);
    }
    //Slice the data on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };
  const result = filterdData(jobs, selectedCategory, query);
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* Main Page */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* Left side */}
        <div className="bg-[#FAFAFA] p-4 rounded ">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Main side */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isloading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>{" "}
              Jobs
              <p>Data Not found Boss</p>
            </>
          )}

          {/* Defining page nation here */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsperpage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems / itemsperpage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* right side */}
        <div className="bg-[#FAFAFA] p-4 rounded"><NewLetter/></div>
      </div>
    </div>
  );
};

export default Home;
