import { useState } from "react";
const FeesForUsingCard = () => {
  const [accountModal, setaccountModal] = useState(false);

  const resetModal = () => {
    setaccountModal(!accountModal);
  };

  return (
    <>
      <div class=" flex flex-col min-w-0 break-words bg-white my-6 shadow-lg rounded border-l-4 border-primary lg:mx-32 ">
        <div class="flex flex-row justify-between content-start items-center py-2 px-5 space-x-5   text-dprimary">
          <div className=" flex items-center flex-row justify-between space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-ntext"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setaccountModal(!accountModal)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
                onClick={() => resetModal()}
              />
            </svg>
            <h1
              className=" text-lg font-popins font-bold text-ntext cursor-pointer"
              onClick={() => resetModal()}
            >
              {" "}
              Fees For Using Tenplus Card
            </h1>
          </div>
        </div>
        <div>
          {accountModal ? (
            <div>
              <div className=" flex flex-col flex-grow w-full  py-4 items-start ">
                <div className=" flex flex-row space-x-3 items-center px-6 py-2">
                  <select
                    name=""
                    id=""
                    className=" text-ntext rounded-lg py-1 px-2 bg-transparent border border-primary  "
                  >
                    <option value="name" className=" ">
                      NGN Balance
                    </option>
                    <option value="name">EUR Balance</option>
                    <option value="name">USD Balance</option>
                  </select>
                </div>
                <div className=" space-x-14 text-lg font-bold text-dprimary  bg-light w-full px-6 flex flex-row py-2">
                  ATM fees*
                </div>
                <div className=" grid grid-cols-4 mx-4 my-3 ">
                  <div className=" text-lg text-lprimary"> Account Fee</div>
                  <div className=" text-lg text-lprimary"> N2000</div>
                  <div className=" text-lg text-lprimary"> Per 12 months</div>
                  <div className=" text-lg text-lprimary">
                    {" "}
                    Fee is charged once a year (when charging annualy)
                  </div>
                </div>

                <div className=" mx-4 my-3 text-ntext font-medium">
                  For Transaction made currency market rate obtained at the of
                  the transaction from a range of financial institutions from a
                  range of financial institutions and includes the conversion
                  fee where indicated
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
     { accountModal ?( <div class=" flex flex-col min-w-0 break-words  my-2 md:mx-32 ">
      <div className=" mx-4 my-3 text-light font-medium">
                  *Additional When making a payment transaction involving currency
                  conversion, the exchange rate used is based on whole sale
                  currency market rate obtained at the of the transaction from a range of financial institutions from a range of financial institutions and includes the conversion fee where indicated
                </div>
      </div>) : null}
    </>
  );
};

export default FeesForUsingCard;
