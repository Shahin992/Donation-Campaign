import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
  const data = useLoaderData();
  const [categoryData, setCategoryData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitdata = e.target.name.value;
    setCategoryData([data.filter((item) => item.category == submitdata)]);
    setIsSearch(true);
    e.target.name.value = "";
  };

  return (
    <div>
      <div className="my-8">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/KL21YzG/Rectangle-4281.png)",
          }}
        >
          <div className="hero-overlay bg-white bg-opacity-90"></div>
          <div className="hero-content text-center text-neutral-content">
            <div>
              <div>
                <h3 className="mb-10 text-xl font-semibold md:text-3xl lg:text-5xl md:font-bold text-center text-black">
                  I Grow By Helping People In Need
                </h3>

                <div className="flex md:w-[500px]">
                  <form onSubmit={handleSubmit}>
                    <input
                      className="pl-2 h-12 md:w-[350px] border-2 border-black rounded-md text-black font-semibold text-xl "
                      placeholder="Search here...."
                      type="text"
                      name="name"
                    />
                    <button className="btn h-12 md:w-[150px] btn-secondary">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 mb-10">
        {!isSearch
          ? data.map((data) => <Card data={data}></Card>)
          : categoryData[0].map((data) => {
              return <Card data={data} />;
            })}
      </div>
    </div>
  );
};

export default Home;