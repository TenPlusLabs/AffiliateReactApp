import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" space-x-9 md:space-x-0 md:h-24 flex-col flex md:flex-row py-4 md:my-0  justify-between items-center font-popins md:px-40  bg-white">
       <Link to={"/"}> <div className=" font-popins text-ntext ml-10 cursor-pointer flex flex-row space-x-2 items-center">
         <img src="images/logo.jpg" alt="Logo" className=" h-10 w-10 rounded-full" />
          <h1>Tenplus</h1>
        </div></Link>
          <form className="  justify-between items-center flex-col flex md:flex-row">
            <label
              class="block mb-2 text-sm font-medium text-ntext dark:text-gray-400 px-4"
            >
              Select your Language
            </label>
            <select
              id="language"
              class="bg-gray-50 border text-ntext border-lprimary  px-2 text-sm rounded-lg focus:ring-primary focus:border-primary block h-8  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>English Language</option>
              <option>Yoruba</option>
              <option>Hausa</option>
              <option>Igbo</option>
            </select>
          </form>
        </div>
     
    </>
  );
};

export default Header;
