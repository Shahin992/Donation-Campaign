import { useEffect, useState } from "react";
import DonationPage from "./DonationPage/DonationPage";

const Donation = () => {

    const [donation,setDonation] = useState([]);
    const [nodata,setNoData] =  useState('');
    const [isShow,setIsShow] = useState(false);

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
        isShow ? donation.map((donationData,idx) => <DonationPage key={idx} donationData = {donationData}></DonationPage>) :

        donation.slice(0,4).map((donationData,idx) => <DonationPage key={idx} donationData = {donationData}></DonationPage>)
          
        }
        </div>

       {
        donation.length > 4 && <div className="flex justify-center items-center text-center mt-5">
        <button onClick={()=> setIsShow(!isShow)} className="btn bg-green-600 font-semibold text-white">{isShow ? "See Less" : "See All"}</button>
        </div>
       }

    </div> 
    
    
    }</dev>
};

export default Donation;