import React from 'react'
// import WebDevHero from '../../components/webdevelopment/WebDevHero'
import Web from "../../components/webdevelopment/WebDevHero";
import WebDevBenefits from '../../components/webdevelopment/WebDevBenefits'
import WebDevServices from '../../components/webdevelopment/WebDevServices'

const WebDevelopmentCompany = () => {
  return (
    <>
      <Web />
      <WebDevBenefits />
      <WebDevServices />
    </>
  )
}

export default WebDevelopmentCompany