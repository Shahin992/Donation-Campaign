import { useEffect, useState } from "react";
import DonationPage from "./DonationPage/DonationPage";

const Donation = () => {

    const [donation,setDonation] = useState([]);
    const [nodata,setNoData] =  useState('');

    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('addedDonation'))

        if (donationItem){
            setDonation(donationItem);
        }
        else{
            setNoData("no data found");
        }

    },[])
    return <dev>{nodata ? <p className="flex justify-center items-center text-4xl">{nodata}</p> 
    
    : 
    
    <div>

        <div className="grid grid-cols-2 gap-8 ">
        {
        donation.map((donationData,idx) => <DonationPage key={idx} donationData = {donationData}></DonationPage>)
          
        }
        </div>

    </div> 
    
    
    }</dev>
};

export default Donation;