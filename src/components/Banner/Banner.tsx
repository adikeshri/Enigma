import React from "react";
import  "./Banner.css";
import BannerLogo from "../../icons/BannerLogo.png";

class Banner extends React.Component{

    render()
    {
        return(
            <div className="BannerBackground">
                <img src={BannerLogo} className="BannerImage" alt=""/>
            </div>
        )
    }
}

export default Banner;