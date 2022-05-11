import React from "react";
import { pageEnabled } from "../src/portfolio";
import { Header, TopButton, Footer } from "../src/components";
import { ContactSection, BlogSection, AddressSection, ContactMessage } from "../src/containers";
//import "./Contact.css";

const Contact = (props) => {
    const theme = props.theme;
    if (!pageEnabled.contact){
    	return null;
     }
    return (
      <div className="main-page">
        <Header theme={theme} />
        <ContactSection theme={theme} />
        <BlogSection theme={theme} />
        <AddressSection theme={theme} />
        <ContactMessage theme={theme} />
        <Footer theme={theme} onToggle={props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
}

export default Contact;
