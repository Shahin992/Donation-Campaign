const Card = ({data}) => {
    const {picture, category, category_bg_color,text_color,text_button_bg_color,title} = data;

    const cardStyle = {
        color: text_color,
        backgroundColor: category_bg_color,
      };

      const categoryBg ={
        backgroundColor: text_button_bg_color
      }
 
  return (
    <div>
      <div className="card card-compact shadow-xl" style={cardStyle}>
      <figure><img src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title p-2 w-[120px] flex justify-center items-center text-sm font-medium rounded-lg " style ={categoryBg} >{category}</h2>
          <p className="text-xl font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
