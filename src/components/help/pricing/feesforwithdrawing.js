import { useState } from "react";
const FeesForWithdrawing = () => {
  const [accountModal, setaccountModal] = useState(!false);
 

  const resetModal = () => {
    setaccountModal(!accountModal);
  
  };

  return (
    <>
      <div class=" flex flex-col min-w-0 break-words bg-white my-6 shadow-lg rounded border-l-4 border-primary lg:mx-32 ">
        <div class="flex flex-row justify-between content-start items-center py-2 px-5 space-x-5   text-ntext">
          <div className=" flex items-center flex-row justify-between">
            <h1 className=" text-lg font-popins font-bold text-ntext cursor-pointer" onClick={()=> resetModal()} >
              {" "}
              Fees For withdrawing money
            </h1>
          </div>
          
        </div>
        <div>
          {accountModal ? ( 
              <div>
              <div className=" flex flex-col flex-grow w-full  py-4 items-start ">
                <div className=" space-y-4 md:space-y-0 md:space-x-14 text-lg font-bold text-ntext  bg-light w-full px-6 flex flex-col md:flex-row py-2">
                  <div className=" flex flex-row space-x-3 items-center">
                    <label > From:</label>
                    <select name="" id="" className=" text-ntext rounded-lg py-1 px-2 bg-transparent border border-primary  ">
                      <option value="name" className=" ">NGN Balance</option>
                      <option value="name">EUR Balance</option>
                      <option value="name">USD Balance</option>
                    </select>
                  </div>
                  <div className=" flex flex-row space-x-3 items-center">
                    <label > To:</label>
                    <select name="" id="" className=" text-ntext rounded-lg py-1 px-2 bg-transparent border border-primary  ">
                     
                      <option value="name">EUR Balance</option>
                      <option value="name">USD Balance</option>
                      <option value="name" className=" ">NGN Balance</option>
                    </select>
                  </div>
                </div>
            
                <div className=" mx-4 my-3 text-ntext font-medium">
                 * When making a payment transaction involving currency
                  conversion, the exchange rate used is based on whole sale
                  currency market rate obtained at the of the transaction from a range of financial institutions from a range of financial institutions and includes the conversion fee where indicated
                </div>
                <div className=" mx-4 my-3 text-ntext font-medium">
                 Adding
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

export default FeesForWithdrawing;
