import React from "react";
import { pageEnabled } from "../src/portfolio";
import { Header, HobbiesCard, TopButton, Footer } from "../src/components";
import { HobbiesSection } from "../src/containers";


const Hobbies = (props) => {
	const theme = props.theme;
	if(!pageEnabled.hobbies){
		return null;
	}	
    return (
      <div className="main-page">
        <Header theme={theme} />
        <HobbiesSection theme={theme} />
        <HobbiesCard theme={theme} />
        <Footer theme={theme} onToggle={props.onToggle} />
        <TopButton theme={theme} />
     </div>
    );
}

export default Hobbies;