/* eslint-disable react/prop-types */

const DonationPage = ({ donationData }) => {
  const { title, picture,text_color,category_bg_color,text_button_bg_color,category } = donationData;

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
        <div  className="flex" style={cardStyle}>
          <div>
            {/* img */}
            <figure><img className="rounded=xl" src={picture} alt="Shoes" /></figure>

          </div>

          <div>
            {/* text */}
            <div className="card-body">
                <h2
                  className="card-title p-2  flex justify-center items-center text-sm font-medium rounded-lg "
                  style={categoryBg}
                >
                  {category}
                </h2>
                <p className="text-xl font-semibold">{title}</p>
              </div>
          </div>
        </div>
      }
    </div>
  );
};

export default DonationPage;
