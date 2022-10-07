import React from 'react'
import Header from './Header.jsx'
import Section from './Section.jsx'

function Tesla() {
  return (
    <div>
    <Header />
    <Section 
    name = "Model 3"
    tagline = "Order Online for touchless delivery"
    leftbtn = "CUSTOM ORDER"
    rightbtn = "EXISTING INVENTORY"
    background = "tesla-images/model-3.jpg"
    />
    <Section 
    name = "Model S"
    tagline = "Order Online for touchless delivery"
    leftbtn = "CUSTOM ORDER"
    rightbtn = "EXISTING INVENTORY"
    background = "tesla-images/model-s.jpg"

    />
    <Section 
    name = "Model X"
    tagline = "Order Online for touchless delivery"
    leftbtn = "CUSTOM ORDER"
    rightbtn = "EXISTING INVENTORY"
    background = "tesla-images/model-x.jpg"

    />
    <Section 
    name = "Model Y"
    tagline = "Order Online for touchless delivery"
    leftbtn = "CUSTOM ORDER"
    rightbtn = "EXISTING INVENTORY"
    background = "tesla-images/model-y.jpg"

    />
    <Section 
    name = "Solar Panel"
    tagline = "Lower cost Solar Panels in India"
    leftbtn = "ORDER NOW"
    rightbtn = "LEARN MORE"
    background = "tesla-images/solar-panel.jpg"

    />
    <Section 
    name = "Solar Roof"
    tagline = "Produce clean energy from your roof"
    leftbtn = "ORDER NOW"
    rightbtn = "LEARN MORE"
    background = "tesla-images/solar-roof.jpg"

    />
    <Section 
    name = "Accessories"
    leftbtn = "ORDER NOW"
    background = "tesla-images/accessories.jpg"
    />
    </div>
  )
}

export default Tesla