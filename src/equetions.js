export const getInvestedAmt =(cost,quantity)=> {
    return (cost * quantity).toFixed(2);
}

export const getUnrealizedPL=(cost,quantity,prise)=>{
    return ((prise*quantity) - getInvestedAmt(cost,quantity)).toFixed(2) 
}

export const getReturns=(cost,quantity,prise)=>{
    return (getUnrealizedPL(cost,quantity,prise) / getInvestedAmt(cost,quantity) * 100).toFixed(2)
}