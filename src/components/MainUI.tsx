import React from "react";

import Flexbox from "flexbox-react";

import Banner from "../components/Banner/Banner";

import TabMenu from "../components/TabMenu/TabMenu";
class MainUI extends React.Component{

    render()
    {
        return(
            <>
            <Flexbox flexDirection="column" height="10%">
                <Banner/>
            </Flexbox>
            <Flexbox flexDirection="row" minWidth="100vh">
                <Flexbox width="35%">
                    <TabMenu/>
                </Flexbox>
                <Flexbox width="65%">
                    Right Pane
                </Flexbox>
            </Flexbox>
            </>
        )
    }
}



export default MainUI;