import { useLoaderData, useParams } from "react-router-dom";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const DonationDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const donationDetails = data.find((data) => data.id === idInt);
  

  const backgroundImageUrl = `url(${donationDetails.picture})`;

  const cardStyle = {
    backgroundColor: donationDetails.text_color,
  };

 
  const handleDonation = () => {
    const donationDetails = data.find((data) => data.id === idInt);
  
    const donationAdded = JSON.parse(localStorage.getItem('addedDonation')) || [];
  
    const isDuplicate = donationAdded.some((donation) => donation.id === donationDetails.id);
  
    if (!isDuplicate) {
     
      donationAdded.push(donationDetails);
  
      localStorage.setItem('addedDonation', JSON.stringify(donationAdded));
  
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Donation added successfully!',
      });
    } else {
   
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'This donation is already in your list.',
      });
    }
  };
  

  return (
    <div>
      <div>
        <div
          className="hero min-h-screen w-[90%] md:w-full"
          style={{
            backgroundImage: backgroundImageUrl,
          }}
        >
          
            
            </div> </div>
          <div className="hero-content text-end text-neutral-content relative">
            <div className="max-w-md">
            <div>  <div className=" hero-overlay absolute inset-0 md:-top-24 lg:-top-32 bg-black opacity-40 md:h-32 md:w-full  lg:w-[1340px]">
             
            </div>
            <button onClick={handleDonation} className=" flex text-xl font-medium absolute rounded-lg p-2 justify-start lg:-top-24  lg:left-10" style={cardStyle}>Donate $ {donationDetails.price}</button>
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
