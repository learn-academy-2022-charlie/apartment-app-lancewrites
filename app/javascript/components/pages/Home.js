import React, { Component } from 'react'
import { UncontrolledCarousel } from 'reactstrap'


export default class Home extends Component {
  render() {
    return (
      <div id='home-div'>
        <UncontrolledCarousel style={{ width: '3rem' }}
        interval='10000'
        className='carousel'
          items={[
            {
              className:'item',
              key: 1,
              src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80'
            },
            {
              className:'item',
              key: 2,
              src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            },
            {
              className:'item',
              key: 3,
              src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
          ]}
        />
        <h2 className='fancy'>You Know It's Fancy Because It's French</h2>
        <div id='body'>
          <p>Bonjour, mon ami. I know you're thinking, "Just another apartment app." And you are kind of right. However, we only list apartments within walking distance from the best French and Creole Restaurants and Cafes in the United States. No more traveling so far to satisfy your cravings for beignets, escargot, or shrimp etouffee. You are clearly obsessed with this cuisine enough to live near these restaurants, and you have come to the right website.</p>
        </div>
        
        
      </div>
    )
  }
}
