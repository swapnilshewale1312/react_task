//IMPORT CONSTATNTS
import {
  FETCH_HOME_REQUEST,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILURE,
} from "./Constants";

//IMPORT SERVICES (Mock API)
import services from "../../services/";

//IMPORT EQUATIONS
import { getInvestedAmt, getUnrealizedPL, getReturns } from "../../equetions";

export const fetchHome = () => {
  return (dispatch) => {
    dispatch(fetchHomeRequest());
    services
      .listingService()
      .then(async (response) => {
        let tempData = response;
        tempData.map((item) => {
          //  CALCULATIONS
          item.investedAmount = getInvestedAmt(item.avgCost, item.quantity);
          item.unrealizedPL = getUnrealizedPL(
            item.avgCost,
            item.quantity,
            item.price
          );
          item.return_val = getReturns(item.avgCost, item.quantity, item.price);
        });

        return tempData;
      })
      .then((data) => {
        dispatch(fetchHomeSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchHomeFailure(error.msg));
      });
  };
};

export const fetchHomeRequest = () => {
  return {
    type: FETCH_HOME_REQUEST,
  };
};

export const fetchHomeSuccess = (data) => {
  return {
    type: FETCH_HOME_SUCCESS,
    payload: data,
  };
};

export const fetchHomeFailure = (err) => {
  return {
    type: FETCH_HOME_FAILURE,
    payload: err,
  };
};
