import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
    const data = useLoaderData();
    
    
    return (
        <div className="grid grid-cols-4 gap-5">
            {
                data.map(data => <Card data = {data}></Card>)
            }
        </div>
    );
};

export default Home;