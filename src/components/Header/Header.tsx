import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { changeMode } from "../../features/display/colorModeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { darkMode } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const onToggle = () => dispatch(changeMode());

  return (
    <header className="mb-50 bg-black text-white">
      <nav className="border-b border-gray-200 border-opacity-25 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink
            className="self-center text-xl font-semibold whitespace-nowrap"
            to={"/"}
          >
            NETFLIX
          </NavLink>

          <div className="flex items-center lg:order-2">
            <button className=" inline-block text-sm px-4 py-2 leading-none border rounded cursor-pointer mr-4 transform transition duration-500 hover:scale-110">
              <NavLink to="/about">About</NavLink>
            </button>

            {darkMode && (
              <BsSun
                onClick={() => onToggle()}
                className="hover:opacity-50 cursor-pointer"
              />
            )}
            {!darkMode && (
              <BsFillMoonFill
                onClick={() => onToggle()}
                className="hover:opacity-50 cursor-pointer"
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

