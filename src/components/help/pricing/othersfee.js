import { useState } from "react";
const OthersFee = () => {
  const [accountModal, setaccountModal] = useState(false);
 

  const resetModal = () => {
    setaccountModal(!accountModal);
  
  };

  return (
    <>
      <div class=" flex flex-col min-w-0 break-words bg-white my-6 shadow-lg rounded border-l-4 border-primary lg:mx-32 ">
        <div class="flex flex-row justify-between content-start items-center py-2 px-5 space-x-5   text-ntext">
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
            <h1 className=" text-lg font-popins font-bold text-ntext cursor-pointer" onClick={()=> resetModal()} >
              {" "}
             Others Fee
            </h1>
          </div>
          
        </div>
        <div>
          {accountModal ? ( 
              <div>
              <div className=" flex flex-col flex-grow w-full  py-4 items-start ">
               
               <div className=" grid grid-cols-4 mx-4 my-3 w-full">
                <div className=" text-lg text-lprimary"> Account Set-Up</div>
                <div className=" text-lg text-lprimary">  Free</div>
         
               </div>
               <div className=" grid grid-cols-4 mx-4 my-3 ">
                <div className=" text-lg text-lprimary"> Account fee</div>
                <div className=" text-lg text-lprimary">  N2500</div>
                <div className=" text-lg text-lprimary">  Per 12 months</div>
                <div className=" text-lg text-lprimary"> Fee is only charged if you have not had at least one transaction in your Tenplus Account or on your Tenplus Card over the previous 12 months</div>
               </div>
               <div className=" grid grid-cols-4 mx-4 my-3 ">
                <div className=" text-lg text-lprimary"> Enhancement fee</div>
                <div className=" text-lg text-lprimary">  Variable per state</div>
                <div className=" text-lg text-lprimary">  Per estimates ammount</div>
                <div className=" text-lg text-lprimary"> If we are required at least one transaction in your Tenplus Account or on your Tenplus Card over the previous 12 months</div>

               </div>
          
               
                
              </div>
             
              </div>
          ) : null}
        </div>
      
      </div>
    </>
  );
};

export default OthersFee;
