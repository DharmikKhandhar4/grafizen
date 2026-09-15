import React from 'react'
import EmailMarketing from "../../page/emailmarketing/EmailMarketing";
import EmailService from "../../components/ui/emailpage/EmailService";
import ServicesType from "../../components/ui/emailpage/ServicesType";
import EmailWhyChoose from "../../components/ui/emailpage/EmailWhyChoose";

const MainEmailPage = () => {
  return (
   <>
   <EmailMarketing />
    <EmailService />
    <ServicesType />
    <EmailWhyChoose />
   </>
  )
}

export default MainEmailPage
