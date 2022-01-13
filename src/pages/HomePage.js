import React, { useEffect } from "react";
//IMPORT COMPONANTS
import Loader from "../componants/Loader";
import MapSection from "../componants/MapSection";
import Card from "../componants/Cart";
// IMPORT LAYOUT
import PageLayout from "../containers/PageLayout";
// IMPORT IMAGES
import card_logo from "../assets/images/card-logo.jpg";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchHome } from "../store/Hompage/Actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const homeState = useSelector((state) => state.homeState);

  useEffect(() => {
    dispatch(fetchHome());
  }, []);

  return homeState.loading ? (
    <Loader />
  ) : (
    <PageLayout>
      <div className="col-md-12 col-lg-8">
          {
              homeState.data.map((item,index)=>(
                  <Card item = {item}/>
              ))
          }
        
      </div>
      <MapSection data ={homeState.data}/>
    </PageLayout>
  );
};

export default HomePage;
