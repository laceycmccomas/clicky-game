import React, { Component } from 'react';
import './App.css';
// import Wrapper from "../components/Wrapper";
// import FriendCard from "../components/FriendCard";
// import Title from "../components/Title";
// import CelebCard from "../components/CelebCard";

class App extends Component {

  state = {
    message: "Click an image to begin!",
    topScore: 0,
    currrentScore: 0,
    celebs: celebs,
    unselectedCelebs: celebs
  }

  componentDidMount() {

  }
  shuffleArray = array => {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectCeleb = celeb => {
    const findCeleb = this.state.unselectedCelebs.find(item => item.celeb === celeb);

    if(findCeleb === undefined) {
      // select new celeb failure
      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.currrentScore > this.state.topScore) ? this.state.currrentScore : this.state.topScore,
        currrentScore: 0,
        celebs: celebs,
        unselectedCelebs: celebs
      });

    }
    else {
      const newCelebs = this.state.unselectedCelebs.filter(item => item.celeb == celeb);

      this.setState({
        message: "You guessed Correctly!",
        currrentScore: this.state.currrentScore + 1,
        celebs: celebs,
        unselectedCelebs: newCelebs
      });
    }
    this.shuffleArray(celebs);

  }
  render() {
    return (
      <Wrapper>
        <FriendCard
            message={this.state.message}
            currrentScore={this.state.currrentScore}
            topScore={this.state.topScore}
        />
              <Title />
              {
                this.state.celebs.map(celeb => (
                  <CelebCard
                  celeb={celeb.celeb}
                  image={celeb.image}
                  selectCeleb={this.selectCeleb}
                  currrentScore={this.state.currrentScore}
              />

          ))
        }    
      </Wrapper>
      
    );
  }
}

export default App;
