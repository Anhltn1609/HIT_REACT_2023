import React from "react";
import FeatureData from "./featureData";
import FeatureItem from "./feature";
import "./FeatureList.css"
const FeatureList = () => {

    return (
        <div className="container">
        <div className="feature-title">
        <h1>Feature</h1>
        <span>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</span>   
        </div>
        <div className="feature-list-item"> 
        {FeatureData && FeatureData.map((item) =>
        <FeatureItem key={item.id} title={item.title} img_main={item.img_main} img_background={item.img_background} word = {item.word}></FeatureItem>
        )}
        </div>
        </div>
    )
}
export default FeatureList; 