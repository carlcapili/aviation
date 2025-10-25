import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed w-full h-16 shadow-lg backdrop-blur-xl flex items-center justify-center z-20">
        <div className="container mx-auto flex justify-between">
          <div className="font-bold text-3xl text-white">
            <a href="#hero">fleet.io</a>
          </div>
          <div>
            <ul className="flex space-x-3 font-semibold text-xl text-white cursor-pointer">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li onClick={() => navigate("login")}>Log In</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
