import Nav from "../partials/nav";
const Commision = () => {
  return (
    <>
      <Nav />
      <div className="p-4 text-gray-500 font-popins">
        <div className="flex flex-1  flex-col md:flex-row lg:flex-row mx-40">
          <div className="mb-2 shadow-sm w-full">
            <div className=" px-2 py-3 border-solid text-primary flex uppercase font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>{" "}
              Commision
            </div>
            <div className="p-3">
              <table className="table-responsive w-full rounded text-center">
                <thead>
                  <tr>
                    <th className="border-2 w-1/6 px-4 py-2 bg-dprimary text-white uppercase">
                      Category
                    </th>
                    <th className="border-2 w-5 px-4 py-2 bg-dprimary text-white uppercase">
                      Commision
                    </th>
                    <th className="border-2 w-40 px-4 py-2 bg-dprimary text-white uppercase">
                      Extra Commission for over 50 orders
                    </th>
                    <th className="border-2 w-40 px-4 py-2 bg-dprimary text-white uppercase">
                      Extra Commission for New Customer
                    </th>
                    <th className="border-2 w-4 px-4 py-2 bg-dprimary text-white uppercase">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 px-2 py-1">Fashion</td>
                    <td className="border-2 px-2 py-1">8%</td>
                    <td className="border-2 px-2 py-1">2%</td>
                    <td className="border-2 px-2 py-1">1%</td>
                    <td className="border-2 px-2 py-1">11%</td>
                  </tr>
                  <tr>
                    <td className="border-2 px-2 py-1">Fashion</td>
                    <td className="border-2 px-2 py-1">8%</td>
                    <td className="border-2 px-2 py-1">2%</td>
                    <td className="border-2 px-2 py-1">1%</td>
                    <td className="border-2 px-2 py-1">11%</td>
                  </tr>
                  <tr>
                    <td className="border-2 px-2 py-1">Fashion</td>
                    <td className="border-2 px-2 py-1">8%</td>
                    <td className="border-2 px-2 py-1">2%</td>
                    <td className="border-2 px-2 py-1">1%</td>
                    <td className="border-2 px-2 py-1">11%</td>
                  </tr>
                  <tr>
                    <td className="border-2 px-2 py-1">Fashion</td>
                    <td className="border-2 px-2 py-1">8%</td>
                    <td className="border-2 px-2 py-1">2%</td>
                    <td className="border-2 px-2 py-1">1%</td>
                    <td className="border-2 px-2 py-1">11%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-center flex-col md:flex-row justify-center items-center uppercase font-popins">
          <button className=" bg-primary text-white py-2 px-5 my-7 mx-7 uppercase rounded-sm">Join now for free</button>
          <button className=" bg-primary text-white py-2 px-5 my-7 mx-7 uppercase rounded-sm">Login</button>
      </div>
      <div className="flex flex-col text-center justify-center items-center  font-popins">
          <div className=" animate-bounce text-3xl uppercase ">Get in torch </div>
          <div className=" text-2xl flex"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg> <div className="px-4">tenplu@gmail.com</div>  </div>
      </div>
    </>
  );
};

export default Commision;
