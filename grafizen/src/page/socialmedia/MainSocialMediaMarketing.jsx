import React from 'react'
import Socialmedia from "../../components/socialmediamarketing/socialmedia"
import SocialMediaAbout from "../../components/socialmediamarketing/SocialMediaAbout"
import  SocialMediaService from "../../components/socialmediamarketing/SocialMediaServices"
import UnifiedDigitalGrowth from "../../components/socialmediamarketing/UnifiedDigitalGrowth"
// import SocialMediaChannels  from '../../components/ui/socialmediamarketing/SocialMediaChannels'
import SocialMediaChannels from "../../components/socialmediamarketing/SocialMediaChannels"

const MainSocialMediaMarketing = () => {
  return (
  <>
  <Socialmedia />
  <SocialMediaAbout />
<SocialMediaService />
  <UnifiedDigitalGrowth />
  <SocialMediaChannels />
  
  {/* <SocialMediaChannels /> */}
  </>
  )
}

export default MainSocialMediaMarketing
