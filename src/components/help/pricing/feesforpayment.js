import { useState } from "react";
const FeesForPayment = () => {
  const [accountModal, setaccountModal] = useState(!false);

  const resetModal = () => {
    setaccountModal(!accountModal);
  };

  return (
    <>
      <div class=" flex flex-col min-w-0 break-words bg-white my-6 shadow-lg rounded border-l-4 border-primary lg:mx-32 ">
        <div class="flex flex-row justify-between content-start items-center py-2 px-5 space-x-5   text-ntext">
          <div className=" flex items-center flex-row justify-between">
            <h1
              className=" text-lg font-popins font-bold text-ntext cursor-pointer"
              onClick={() => resetModal()}
            >
              {" "}
              Fees For making Payments
            </h1>
          </div>
        </div>
        <div>
          {accountModal ? (
            <div>
              <div className=" flex flex-col flex-grow w-full  py-4 items-start ">
                <div className=" text-lg font-bold text-ntext  bg-light w-full px-6 py-1">
                  When Making Payment to Tenplus Advertizing
                </div>
                <div className=" grid grid-cols-4 mx-4 my-3 border-b py-3">
                  <div className=" text-lg text-lprimary">
                    Payment in Same currency
                  </div>
                  <div className=" text-lg text-lprimary">
                    2.00% of transaction amount
                  </div>
                  <div className=" text-lg text-lprimary"> Per Payment</div>
                  <div className=" text-lg text-lprimary">
                    Eachtime You pay tenplus Digital Lab Advertizing invoice in
                    same currency
                  </div>
                </div>
                <div className=" grid grid-cols-4 mx-4 my-3 border-b py-3">
                  <div className=" text-lg text-lprimary">
                    {" "}
                    Payment in different currency
                  </div>
                  <div className=" text-lg text-lprimary">
                    {" "}
                    2.00% above market rate
                  </div>
                  <div className=" text-lg text-lprimary"> Per Payment</div>
                  <div className=" text-lg text-lprimary">
                    {" "}
                    Eachtime You pay tenplus Digital Lab Advertizing invoice in
                    different currency
                  </div>
                </div>
                <div className=" mx-4 my-3 text-ntext font-medium">
                  When making a payment transaction involving currency
                  conversion, the exchange rate used is based on whole sale
                  currency market rate obtained at the of the transaction from a range of financial institutions from a range of financial institutions and includes the conversion fee where indicated
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FeesForPayment;
