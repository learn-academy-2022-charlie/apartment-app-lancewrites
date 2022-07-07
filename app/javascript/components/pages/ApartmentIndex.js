import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'

export default class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    console.log("props.apartments:", apartments)
    return (
      <>
        <h3>ApartmentIndex</h3>
        <div>
          {apartments && apartments.map((apartment)=> {
            return ( 
            <Card key={apartment.id}>
              <CardImg top style={{ width: '30rem' }} src={apartment.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>Street: {apartment.street}</CardTitle>
                <CardSubtitle>City: {apartment.city}</CardSubtitle>
                <CardText>State: {apartment.state}</CardText>
                <CardText>Pets: {apartment.pets}</CardText>
                <NavLink to={`/apartmentshow/${apartment.id}`}>
                <Button>Find Out More!</Button>
                </NavLink>
              </CardBody>
            </Card>
            )
          })
          }
        </div>
      </>
      
    )
  }
}
