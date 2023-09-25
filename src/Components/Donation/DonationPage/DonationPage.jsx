/* eslint-disable react/prop-types */

const DonationPage = ({ donationData }) => {
  const { title, picture,text_color,category_bg_color,text_button_bg_color,category,price } = donationData;

  const cardStyle = {
    color: text_color,
    backgroundColor: category_bg_color
  };

  const categoryBg ={
    backgroundColor: text_button_bg_color
  }

  return (
    <div>
      {
        <div  className="flex rounded-lg" style={cardStyle}>
          <div>
            {/* img */}
            <figure><img className="rounded=xl h-full" src={picture} alt="Shoes" /></figure>

          </div>

          <div>
            {/* text */}
            <div className="card-body  pt-2">
                <h2
                  className="card-title p-2 w-[120px]  flex justify-center items-center text-sm font-medium rounded-lg "
                  style={categoryBg}
                >
                  {category}
                </h2>
                <p className="text-xl font-semibold pt-0">{title}</p>
                <p className="font-semibold">$ {price}</p>
                <button className="font-semibold p-2 w-[120px] text-white" style={categoryBg}>View Details</button>
              </div>
          </div>
        </div>
      }
    </div>
  );

  
};

export default DonationPage;
