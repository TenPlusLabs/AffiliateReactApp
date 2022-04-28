import { useState } from "react";
const FeesForReceiving = () => {
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
              Fees For receiving Money
            </h1>
          </div>
          
        </div>
        <div>
          {accountModal ? ( 
              <div>
              <div className=" flex flex-col flex-grow w-full  py-4 items-start ">
                <div className=" text-lg font-bold text-ntext  bg-light w-full px-6 py-1">
                 When Paid Via a receiving account
                </div>
               <div className=" grid grid-cols-4 mx-4 my-3 ">
                <div className=" text-lg text-lprimary"> GBP Receiving accounts</div>
                <div className=" text-lg text-lprimary">  Free</div>
                <div className=" text-lg text-lprimary">  Per Payment</div>
                <div className=" text-lg text-lprimary"> Eachtime you receive a payment</div>
               </div>
               <div className=" grid grid-cols-4 mx-4 my-3 ">
                <div className=" text-lg text-lprimary"> USD Receiving money</div>
                <div className=" text-lg text-lprimary">  1.00% of transaction amount</div>
                <div className=" text-lg text-lprimary">  Per Payment</div>
                <div className=" text-lg text-lprimary"> Eachtime you receive a payment</div>
               </div>
          
                {/* <table className="table-responsive  rounded ">
            <tbody>
                <tr>
                  
                  <td className=" px-1 py-1 items-center flex  ">
                   GBP Receiving money
                  </td>
                  <td className=" w-20 px-2 py-1">
                    Free
                   
                  </td>
                  <td className="px-1 py-1 text-center">N200,000</td>
                  <td className="px-1 py-1 text-center">2%</td>
                 
                </tr>
                
              </tbody>
            </table> */}
                
              </div>
              <div className=" flex flex-col flex-grow w-full  py-4 items-start ">
                <div className=" text-lg font-bold text-ntext  bg-light w-full px-6 py-1">
                 When Paid Via a receiving account
                </div>
               <div className=" grid grid-cols-4 mx-4 my-3 ">
                <div className=" text-lg text-lprimary"> Transfer fee*</div>
                <div className=" text-lg text-lprimary">  0.50% of transaction amount</div>
                <div className=" text-lg text-lprimary">  Per Transaction</div>
                <div className=" text-lg text-lprimary"> Eachtime currency is transfered between your balances</div>
               </div>
             
          
                {/* <table className="table-responsive  rounded ">
            <tbody>
                <tr>
                  
                  <td className=" px-1 py-1 items-center flex  ">
                   GBP Receiving money
                  </td>
                  <td className=" w-20 px-2 py-1">
                    Free
                   
                  </td>
                  <td className="px-1 py-1 text-center">N200,000</td>
                  <td className="px-1 py-1 text-center">2%</td>
                 
                </tr>
                
              </tbody>
            </table> */}
                
              </div>
              </div>
          ) : null}
        </div>
      
      </div>
    </>
  );
};

export default FeesForReceiving;
