import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Dollar from "../public/icon-dollar.svg";
import  Person  from "../public/icon-person.svg";

const Main = () => {
  const [value, setValue] = useState(5);
  const [BillAmount, setBillAmount] = useState(null);
  const [TipAmount, setTipAmount] = useState(0.0);
  const [NumberOfPeople, setNumberOfPeople] = useState(null);
  const [TotalNumber, setTotalNumber] = useState(0.0);

  useEffect(() => {
    const calculate = () => {
      setTipAmount(BillAmount * (value / 100));
      if (NumberOfPeople !== null) {
        setTotalNumber(TipAmount * NumberOfPeople);
      }
    };
    calculate();
  }, [value, BillAmount, NumberOfPeople]);

  const HandleReset = () => {
    setBillAmount(0);
    setNumberOfPeople(0);
    setTipAmount(0);
    setTotalNumber(0);
  };

  return (
    <div className="bg-white sm:w-[50vw] rounded-t-[2.5rem] sm:rounded-xl sm:container sm:mx-auto sm:my-24">
      <div className="mx-6 py-6 sm:grid sm:grid-cols-2 sm:space-x-6">
        <div className="">
          <div className="billAmountInput">
            <h1 className="font:semibold text-gray-700">Bill</h1>
            <div className="bg-[#F3F8FB] h-11 flex flex-grow-0 flex-shrink-0 items-center rounded-lg">
              <div className="h-5 w-6 ml-2">
                <Image src={Dollar} height={20} width={20} />
              </div>
              <input
                type="number"
                name="billnumber"
                value={BillAmount}
                placeholder="0.0"
                className="text-right ring-0 outline-none bg-[#F3F8FB] w-[100%] p-2 text-xl font-bold rounded-lg text-[#00494d]"
                onChange={(e) => setBillAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="font-semibold text-gray-500">Select Tip %</div>

            <div className="grid grid-cols-2">
              <div
                className={`${
                  value === 5
                    ? "bg-[#26c0ab] text=[#00494d]"
                    : "bg-[#00494d] text-white"
                } p-3 rounded-lg cursor-pointer font-bold text-2xl text-center my-2 mr-4 select-none`}
                onClick={(e) => setValue(5)}>
                <p className="text-">5%</p>
              </div>
              <div
                className={`${
                  value === 10
                    ? "bg-[#26c0ab] text=[#00494d]"
                    : "bg-[#00494d] text-white"
                }
                                          p-3 rounded-lg cursor-pointer font-bold text-center mr-4 select-none my-2 text-2xl`}
                onClick={(e) => setValue(10)}>
                <p className="">10%</p>
              </div>
              <div className={`${
                             value===15 ? "bg-[#26c0ab] text-[#00494d]" : 
                             "bg-[#004946] text-white"
              } 
                        p-3 font-bold rounded-lg mr-4 text-center text-2xl cursor-pointer select-none my-2`} onClick={(e)=>setValue(15)}>
                  <p className="">15%</p>
            </div>
                  <div className={`${value===25 ? "bg-[#26c0ab] text-[#00494d]" : "bg-[#00494d] text-white" }
                       p-3 text-center mr-4 my-2 cursor-pointer text-2xl font-bold rounded-lg `} onClick={(e)=>setValue(25)}>
                      <p className="">25%</p>
                  </div>

                  <div className={`${value===50 ? "bg-[#26c0ab] text-[#00494d]" : "bg-[#00494d] text-white"}
                   p-3 text-center mr-4 my-2 cursor-pointer text-2xl font-bold rounded-lg select-none`} onClick={(e)=>setValue(50)}>
                       <p className=""> 50%</p>
                   </div>
                  <div className={`bg-[#F3F8FB] rounded-lg p-2 font-bold text-gray-500 text-2xl text-center my-2 mr-4 select-none`} >
                    <p className="">Custom</p>
                  </div>
                  </div>
          </div>
           <div className="mt-8">
               <div className="billAmountInput">
                   <h3 className="font-semibold text-grey-500">
                       Number of People
                   </h3>
                   <div className="round-lg bg-[#f3f8fb] mt-2 h-11 flex flex-shrink-0 flex-grow-0">
                       <div className="h-5 w-6 ml-2 mt-3">
                           <Image src={Person} width={20} height={20}/>
                       </div>
                       <input className="bg-[#f3f8fb] width-[100%]
                        text-right p-2 outline-none h-8 font-bold 
                        text-center text-xl text-[#00494d] rounded-lg ring-0"
                        placeholder="Enter Number of People"
                         name="Number of People"
                          value={NumberOfPeople}
                          onChange={(e)=>setNumberOfPeople(e.target.value)}/>
                   </div>
               </div>
           </div>
        </div>
         <div className="bg-[#00494d]  rounded-lg p-2">
             <div className="flex justify-between">
                 <div className="ml-3 mt-5 p-3 leading-tight">
                     <p className="text-white">Tip Amount</p>
                     <p className=" text-[#7f9c9f] text-sm">/person</p>
                 </div>
                 <h2 className="font-bold text-3xl mt-8 mr-2 text-[#26c0ab]">
                     ${TipAmount}
                 </h2>
             </div>
             <div className="flex justify-between">
                 <div className="mt-8 ml-3 p-4 leading-tight">
                     <p className="text-white font-semibold">
                         Total
                     </p>
                     <p className="text-[#7f9c9f] text-sm">/person</p>
                 </div>
                 <h2 className="text-3xl mt-14 text-[#26c0ab] mr-2 font-bold ">${NumberOfPeople === null ? TipAmount : TotalNumber}</h2>
             </div>
             <div className="sm:mt-[13rem] pb-2 ">
                 <div className="bg-[#26c0ab] mx-2 text-[#00494d] font-bold  text-xl m-4
                   text-center cursor-pointer flex-grow-0 p-2 rounded-sm " 
                 onClick={(e)=>HandleReset()}>
                     <p className="">RESET</p>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};
export default Main;
