import Header from "../partials/header";
import Nav from "../partials/nav";
import Greetings from "../partials/greetings";
import { Link } from "react-router-dom";
import Footer from "../partials/footer";

// import {useState} from "react"
const promoteSingle = () => {
  //  const [Modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <Nav />

      <Greetings />
     
     
      <div class="  mb-12 xl:mb-10 items-center px-4 py-10 mt-10 bg-white border rounded-lg font-popins mx-10">
      <div className=" px-2 justify-center my-5 flex flex-col items-center">
         <div className=" text-2xl text-ntext font-bold ">
            Search for a Product
          </div>
          <div className=" justify-center flex text-base font-medium text-lprimary">
          Search for a specific product from TenPlus
        </div>
      </div>
       
      <div className=" flex my-4 flex-col md:flex-row mx-2 items-center justify-center">
          <form className="  justify-between md:items-center flex-col flex md:flex-row">
            <label class="block mb-2 text-lg font-medium text-ntext dark:text-gray-400 px-4">
              Search
            </label>
            <select
              id="language"
              class="bg-gray-50 border border-lprimary text-gray-900 px-2 text-sm rounded-lg focus:ring-primary focus:border-primary block h-8  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>All Products</option>
              <option>Web</option>
              <option>Mobile</option>
              <option>Android</option>
            </select>
          </form>
          <form className="  justify-between md:items-center  flex flex-col md:flex-row">
            <label class="block mb-2 text-lg font-medium text-ntext dark:text-gray-400 px-4">
              For
            </label>

            <input
              placeholder="Product Name"
              type="text"
              class="border border-lprimary px-2 text-lg rounded-lg focus:ring-primary focus:border-primary rounded-r-none"
            />
            <button class=" my-2 px-2 font-bold text-lg  bg-primary border border-lprimary focus:ring-primary focus:border-primary text-white ">
              Go
            </button>
          </form>
      </div>
        <div class=" flex flex-col min-w-0 break-words mb-6 shadow-lg rounded border-l-4 border-primary lg:mx-32 ">
          <div className=" flex justify-between items-center">
            <div class="flex flex-row   items-center py-2  px-2 md:px-5 md:space-x-5   text-ntext">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-ntext hidden md:flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <h1 className=" text-lg font-popins font-bold">
                {" "}
                Found <span>10</span> result for <span>Mobile</span> on Tenplus
              </h1>
            </div>
            <form className="  justify-between items-center flex-col flex md:flex-row px-2 md:px-5">
              <label class="block mb-2 text-lg font-medium text-ntext dark:text-gray-400 px-4">
                Sort By
              </label>
              <select
                id="language"
                class="bg-gray-50 border border-lprimary text-gray-900 px-2 text-sm rounded-lg focus:ring-primary focus:border-primary block h-8  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Features</option>
                <option>Price</option>
                <option>Product</option>
                <option>Commision</option>
              </select>
            </form>
          </div>
          <div>
            <table className="table-responsive w-full rounded ">
              <thead className=" border-2 border-t border-b">
                <tr>
                  <th className=" w-5 px-1 py-2  text-ntext uppercase"></th>
                  <th className="w-5 px-1 py-2  text-ntext uppercase">
                    Product
                  </th>
                  <th className=" w-5 px-1 py-2  text-ntext uppercase">
                   Name
                  </th>
                  <th className=" w-64  py-2  text-ntext uppercase">
                    Features
                  </th>

                  <th className=" w-10  py-2  text-ntext uppercase">
                    Price
                  </th>
                  <th className=" w-10  py-2  text-ntext uppercase">
                    Commission
                  </th>
                  <th className=" w-4 px-4 py-2  text-ntext uppercase"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 px-1 py-1">1</td>
                  <td className="border-2 px-1 py-1 items-center flex  justify-center">
                    <img src="images/image.png" alt="" className=" w-20 h-20" />
                  </td>
                  <td className="border-2 px-2 py-1">
                   Banana Island
                  </td>
                  <td className="border-2 px-2 py-1">
                    {" "}
                    Online vendors, shop owners,Traders, Merchants and services
                    on the internet.items-center flex justify-centeritems-center
                    flex justify-center
                  </td>
                
                  <td className="border-2 px-1 py-1 text-center">N200,000</td>
                  <td className="border-2 px-1 py-1 text-center">2%</td>
                  <td className="border-2 px-1 py-1 text-center">
                    <Link to={"/links"}>
                      <button
                        type="submit"
                        className="bg-lprimary py-2 px-5 text-white font-popins font-medium hover:bg-dprimary "
                      >
                        View Link
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-2 px-1 py-1">2</td>
                  <td className="border-2 px-1 py-1 items-center flex  justify-center">
                    <img src="images/image.png" alt="" className=" w-20 h-20" />
                  </td>
                  <td className="border-2 px-2 py-1">
                   Banana Island
                  </td>
                  <td className="border-2 px-2 py-1">
                    {" "}
                    Online vendors, shop owners,Traders, Merchants and services
                    on the internet.items-center flex justify-centeritems-center
                    flex justify-center
                  </td>
                  <td className="border-2 px-1 py-1 text-center">N200,000</td>
                  <td className="border-2 px-1 py-1 text-center">2%</td>
                  <td className="border-2 px-1 py-1 text-center">
                    <Link to={"/links"}>
                      <button
                        type="submit"
                        className="bg-lprimary py-2 px-5 text-white font-popins font-medium hover:bg-dprimary "
                      >
                        View Link
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-2 px-1 py-1">3</td>
                  <td className="border-2 px-2 py-1 items-center flex  justify-center">
                    <img src="images/image.png" alt="" className=" w-20 h-20" />
                  </td>
                  <td className="border-2 px-2 py-1">
                   Banana Island
                  </td>
                  <td className="border-2 px-2 py-1">
                    {" "}
                    Online vendors, shop owners,Traders, Merchants and services
                    on the internet.items-center flex justify-centeritems-center
                    flex justify-center
                  </td>
                  <td className="border-2 px-1 py-1 text-center">N200,000</td>
                  <td className="border-2 px-1 py-1 text-center">2%</td>
                  <td className="border-2 px-1 py-1 text-center">
                    <Link to={"/links"}>
                      <button
                        type="submit"
                        className="bg-lprimary py-2 px-5 text-white font-popins font-medium hover:bg-dprimary "
                      >
                        View Link
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-2 px-1 py-1">4</td>
                  <td className="border-2 px-2 py-1 items-center flex  justify-center">
                    <img src="images/image.png" alt="" className=" w-20 h-20" />
                  </td>
                  <td className="border-2 px-2 py-1">
                   Banana Island
                  </td>
                  <td className="border-2 px-2 py-1">
                    {" "}
                    Online vendors, shop owners,Traders, Merchants and services
                    on the internet.items-center flex justify-centeritems-center
                    flex justify-center
                  </td>
                  <td className="border-2 px-1 py-1 text-center">N200,000</td>
                  <td className="border-2 px-1 py-1 text-center">2%</td>
                  <td className="border-2 px-1 py-1 text-center">
                    <Link to={"/links"}>
                      <button
                        type="submit"
                        className="bg-lprimary py-2 px-5 text-white font-popins font-medium hover:bg-dprimary "
                      >
                        View Link
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer class=" py-4 flex flex-col justify-between items-centercontent-start ">
          <div class="container mx-auto px-4">
            <div class="flex  flex-col items-center md:justify-between justify-center ">
             
<nav aria-label="Page navigation example">
<ul class="inline-flex items-center -space-x-px">
<li>
<a href="/" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
<span class="sr-only">Previous</span>
<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
</a>
</li>
<li>
<a href="/" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
</li>
<li>
<a href="/" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
</li>
<li>
<a href="/" aria-current="page" class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
</li>
<li>
<a href="/" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
</li>
<li>
<a href="/" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
</li>
<li>
<a href="/" class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
<span class="sr-only">Next</span>
<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
</a>
</li>
</ul>
</nav>

            </div>
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default promoteSingle;
