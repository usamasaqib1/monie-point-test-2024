import RamosLogo from "../../assets/ramos-logo.png"
import "./header.scss"

const Navbar = () => {
    const buttons = ["Dashboard", "Reports", "Documents", "History", "Settings"];
  return (
    <div className="px-8">
    <nav className="flex justify-between w-full px-2 py-2 mx-4 text-white bg-neutral-950 rounded-3xl">
      <div className="self-center">
        <img src={RamosLogo} className="w-24 ml-4" alt="ramos" />
      </div>

      <div className="text-primary-200 [&>*:first-child]:rounded-l-xl [&>*:last-child]:rounded-r-xl">
        {buttons.map((buttonText, i) => (
          <button
            key={i}
            className="bg-primary-medium rounded-none border-0 ring-0 focus:outline-0 hover:bg-primary-800 py-4 font-normal text-sm"
          >
            {buttonText}
          </button>
        ))}
      </div>
      <button className="px-8 text-primary bg-primary-50 rounded-2xl">
        Sign Up
      </button>
    </nav>
    </div>
  );
};

export default Navbar;
