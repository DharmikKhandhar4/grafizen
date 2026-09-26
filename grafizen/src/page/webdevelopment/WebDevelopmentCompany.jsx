import React from 'react'
// import WebDevHero from '../../components/webdevelopment/WebDevHero'
import Web from "../../components/webdevelopment/WebDevHero";
import WebDevBenefits from '../../components/webdevelopment/WebDevBenefits'
import WebDevServices from '../../components/webdevelopment/WebDevServices'
import WebDevProcess from '../../components/webdevelopment/WebDevProcess'
import WebDevTechStack from '../../components/webdevelopment/WebDevTechStack'

const WebDevelopmentCompany = () => {
  return (
    <>
      <Web />
      <WebDevBenefits />
      <WebDevServices />
      <WebDevProcess />
      <WebDevTechStack />
    </>
  )
}

export default WebDevelopmentCompany