import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const donationDetails = data.find((data) => data.id === idInt);

  const backgroundImageUrl = `url(${donationDetails.picture})`;

  const cardStyle = {
    backgroundColor: donationDetails.text_color,
  };

  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: backgroundImageUrl,
          }}
        >
          
            
            </div> </div>
          <div className="hero-content text-end text-neutral-content relative">
            <div className="max-w-md">
            <div>  <div className=" hero-overlay absolute inset-0 -top-24 md:-top-32 bg-black opacity-40 md:h-32  lg:w-[1340px]">
             
            </div>
            <button className=" flex text-xl font-medium absolute rounded-lg p-2 justify-start -top-24  lg:left-10" style={cardStyle}>Donate $ {donationDetails.price}</button>
          </div>
          
        </div>
       
      </div>
      <div>
        <h1 className="my-7 text-5xl font-bold">{donationDetails.title}</h1>
        <p className="mb-5">{donationDetails.description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
