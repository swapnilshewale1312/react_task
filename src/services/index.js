const data = [
  {
    scrip: "AADR",
    quantity: "430",
    price: "50.30",
    avgCost: "41.75",
    portfolioValue: "22.06",
    type:"mf"
  },
  {
    scrip: "MFEM",
    quantity: "210",
    price: "23.20",
    avgCost: "22.50",
    portfolioValue: "5.81",
    unrealizedPL: "146.16",
    type:"mf"
  },
  {
    scrip: "JPEM",
    quantity: "328",
    price: "52.50",
    avgCost: "56.70",
    portfolioValue: "22.86",
    type:"mf"
  },
  {
    scrip: "KEMQ",
    quantity: "801",
    price: "20.40",
    avgCost: "22.24",
    portfolioValue: "21.89",
    type:"mf"
  },

  {
    scrip: "KLDW",
    quantity: "523",
    price: "32.90",
    avgCost: "26.32",
    portfolioValue: "16.92",
    type:"etf"
  },
  {
    scrip: "KOIN",
    quantity: "335",
    price: "25.40",
    avgCost: "25.40",
    portfolioValue: "10.46",
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
