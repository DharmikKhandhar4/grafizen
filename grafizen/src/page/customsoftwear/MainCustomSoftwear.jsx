import React from 'react'
import CustomSoftware  from './CustomSoftware'
import SoftwareEngineeringProcess from "../../components/customsoftwear/SoftwareEngineeringProcess"
import SoftwearWhyChooseUS from "../../components/customsoftwear/SoftwearWhyChooseUs"
import SoftwareCaseStudies  from '@/components/customsoftwear/SoftwareCaseStudies'
import Industries  from '@/components/customsoftwear/Industries'


const MainCustomSoftwear = () => {
  return (
   <>
   <CustomSoftware />
   <SoftwareEngineeringProcess />
   <SoftwearWhyChooseUS />
   <SoftwareCaseStudies />
   <Industries />

   </>
  )
}

export default MainCustomSoftwear
