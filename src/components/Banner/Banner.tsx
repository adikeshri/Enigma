import React from "react";
import  "./Banner.css";
import BannerLogo from "../../icons/GreenSquare.png";

class Banner extends React.Component{

    render()
    {
        return(
            <div className="BannerBackground">
                <img src={BannerLogo} width="15px" height="15px" style={{margin:5, marginTop: 10.5, float: "left", marginRight: 4}}/>
                <p className="BannerFont">ENIGMA</p>
            </div>
        )
    }
}

export default Banner;