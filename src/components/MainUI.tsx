import React from "react";

import Flexbox from "flexbox-react";

import Banner from "../components/Banner/Banner";

class MainUI extends React.Component{

    render()
    {
        return(
            <>
            <Flexbox flexDirection="column" height="10%">
                <Banner/>
            </Flexbox>
            <Flexbox flexDirection="row" minWidth="100vh">
                <Flexbox width="15%">
                    Left Pane
                </Flexbox>
                <Flexbox width="85%">
                    Right Pane
                </Flexbox>
            </Flexbox>
            </>
        )
    }
}



export default MainUI;