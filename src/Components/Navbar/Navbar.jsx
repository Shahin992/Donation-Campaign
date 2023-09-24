const Navbar = () => {
  return (
    <div>
      <div className="navbar justify-between items-center bg-base-100">
          <div className="flex-1">
            <div>
              <img
                className="w-[70%]"
                src="https://i.ibb.co/kypTxxP/Logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className="text-2xl mr-5">Home</li>
              <li className="text-2xl mr-5">Donation</li>
              <li className="text-2xl mr-5">Statistics</li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
