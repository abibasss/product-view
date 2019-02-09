import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './Components/navigation.jsx'
import $ from 'jquery';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentShoe: '',
      Shoes: '',
      Images:''
    }
  }

  componentDidMount() {
    // this.getProduct();
    // this.getImages();
  }

  getProduct() {
    $.ajax({
      type: 'GET',
      url: '/products',
      data: { model: 'UltraBoost All Terrain Shoes'},
      contentType: 'application/json',
      success: (data)=> {console.log(data)},
      error: (err) => {console.log('error')}
    })
  }

  getImages() {
    $.ajax({
      type: 'GET',
      url: '/images',
      data: { imageID: '1'},
      contentType: 'application/json',
      success: (data)=> {console.log(data)},
      error: (err) => {console.log('error')}
    })
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));