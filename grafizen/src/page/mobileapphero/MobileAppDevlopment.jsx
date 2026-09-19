import React from 'react'
import MobileAppHero from '@/components/mobileapphero/MobileAppHero'
import MobileAppService from "../../components/mobileapphero/MobileAppService"
import GrafizenBestPractices from "../../components/mobileapphero/GrafizenBestPractices"
import MobileAppWhyChoose from "../../components/mobileapphero/MobileAppWhyChoose"
import OverView from "../../components/mobileapphero/OverView"

const MobileAppDevlopment = () => {
  return (
  <>
  <MobileAppHero />
  <MobileAppService />
  <GrafizenBestPractices />
  <MobileAppWhyChoose />
  <OverView />
  </>
  )
}

export default MobileAppDevlopment