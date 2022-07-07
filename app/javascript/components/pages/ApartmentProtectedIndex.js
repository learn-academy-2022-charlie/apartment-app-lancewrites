import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class ApartmentProtectedIndex extends Component {
  render() {
    const { apartments } = this.props
    console.log("props.apartments:", apartments)
    return (
      <>
        <h3>My Apartments</h3>
        <div>
          {apartments && apartments.map((value, index)=> {
            return ( 
            <Card key={index}>
              <CardImg top style={{ width: '30rem' }} src={value.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>Street: {value.street}</CardTitle>
                <CardSubtitle>City: {value.city}</CardSubtitle>
                <CardText>State: {value.state}</CardText>
                <CardText>Manager: {value.manager}</CardText>
                <CardText>Contact: {value.email}</CardText>
                <CardText>Pets: {value.pets}</CardText>
                
                <div className='button-container'>
                <Button>Edit</Button>
                <Button>Delete</Button>
                </div>
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