import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import images from "./images.json";
import './App.css';

class App extends Component {
  state = {
    images: images,
    score: 0,
    topscore: 0
  };
  

  restartGame = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score })
    }

    this.setState({ score: 0 });
    this.state.images.forEach(image => { image.counter = 0 })

    return true;
  };

  shuffleImages = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var randomIndex = Math.floor(Math.random() * i);
      var tempValue = array[i];

      array[i] = array[randomIndex];

      array[randomIndex] = tempValue;
    }
    return array;
  }

 
  countImage = id => {
    let selectedImage;

    for (let i = 0; i < this.state.images.length; i++) {
 
      if (this.state.images[i].id === id) {

        selectedImage = this.state.images[i];
      }
    }
  
    if (selectedImage.counter !== 1) {
  
      let currScore = this.state.score + 1;
      this.setState({ score: currScore });
       if (this.state.topscore <= currScore) {
        this.setState({ topscore: currScore });
      }

      selectedImage.counter = 1;


      this.shuffleImages(this.state.images);
    } else { 
      this.restartGame();
    }
  }

  render() {
    return (
      <div className="container">
        <Navbar score={this.state.score} topscore={this.state.topscore}></Navbar>
        <Header></Header>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="title">Alphabet Images</h1>
          </div>
        </div>
        <Wrapper>
          {this.state.images.map(images => (<ImageCard image={images.image}
            countImage={this.countImage} id={images.id} key={images.id} />))}
        </Wrapper >
      </div>
    );
  }
}

export default App;
