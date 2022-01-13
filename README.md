  let tempMf = mfTotal/mfCount 
    let tempEtf =  etfTotal/etfCount 




    const data = [
  {
    scrip: "AADR",
    quantity: "430",
    price: "50.30",
    avgCost: "41.75",
    investedAmount: "17,952.07",
    portfolioValue: "22.06",
    unrealizedPL: "3,676.93",
    return_val: "20.48",
    type:"mf"
  },
  {
    scrip: "MFEM",
    quantity: "210",
    price: "23.20",
    avgCost: "22.50",
    investedAmount: "4,725.84",
    portfolioValue: "5.81",
    unrealizedPL: "146.16",
    return_val: "3.09",
    type:"mf"
  },
  {
    scrip: "JPEM",
    quantity: "328",
    price: "52.50",
    avgCost: "56.70",
    investedAmount: "18,597.60",
    portfolioValue: "22.86",
    unrealizedPL: "-1,377.60",
    return_val: "-7.41",
    type:"mf"
  },
  {
    scrip: "KEMQ",
    quantity: "801",
    price: "20.40",
    avgCost: "22.24",
    investedAmount: "17,811.04",
    portfolioValue: "21.89",
    unrealizedPL: "-1,470.64",
    return_val: "-8.26",
    type:"mf"
  },

  {
    scrip: "KLDW",
    quantity: "523",
    price: "32.90",
    avgCost: "26.32",
    investedAmount: "13,765.36",
    portfolioValue: "16.92",
    unrealizedPL: "3,441.34",
    return_val: "25.00",
    type:"etf"
  },
  {
    scrip: "KOIN",
    quantity: "335",
    price: "25.40",
    avgCost: "25.40",
    investedAmount: "8,509.00",
    portfolioValue: "10.46",
    unrealizedPL: "",
    return_val: "0.00",
    type:"etf"

  },
 
];

// Mock API
export const listingService = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(data.length>0){
        resolve(data);
      }else{
        reject({msg:"Error! Somthing wrong"})
      }
    }, 800);
  });
};


const services = {
  listingService: listingService,
};

export default services;




  // let return_bar = props.return_val + "%"
  // if (props.return_val<0){
  //   return_bar = (props.return_val * -1) + "%";
  // }else{
  //   return_bar = props.return_val + "%"
  // }

{/* <div className="progress" style={{width:"50%"}}>
<div className="progress-bar" style={{ width: return_bar }} />
</div>
<div className="progress" style={{width:"50%"}}>
<div className="progress-bar" style={{position:"absolute", left: "-10%", top: "50%"}} />

</div> */}