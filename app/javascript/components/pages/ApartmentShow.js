import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props
    console.log("SHOW", apartment)
    return (
      <>
      <h3>So, you're interested? Good</h3>
      <div>
        {apartment && 
          <Card key={apartment.id}>
            <CardImg top style={{ width: '30rem' }} src={apartment.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>Street: {apartment.street}</CardTitle>
              <CardSubtitle>City: {apartment.city}</CardSubtitle>
              <CardText>State: {apartment.state}</CardText>
              <CardText>Manager: {apartment.manager}</CardText>
              <CardText>Contact: {apartment.email}</CardText>
              <CardText>{apartment.bedrooms}</CardText>
              <CardText>{apartment.bathrooms}</CardText>
              <CardText>Pets: {apartment.pets}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        }
      </div>
    </>
      
    )
  }
}
