import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageWidth: '3840',
      imageHeight: '2160',
      tags: 'nature',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateUrl = this.generateUrl.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  generateUrl(imageWidth, imageHeight, tags) {
    // console.log(width, height, tags)
    //const splitTags = tags.split(" ");
    // console.log('split', splitTags)
    let generatedUrl = 'https://source.unsplash.com/' + imageWidth + 'x' + imageHeight + '/?' + tags

    /*
    for(let i = 0; i < splitTags.length; i++) {
      generatedUrl.concat('tag'+',')
    }
    */

    console.log(generatedUrl);
    return generatedUrl;
  }

  handleSubmit(event) {
    event.preventDefault();
    let url = 'https://source.unsplash.com/' + this.state.imageWidth + 'x' + this.state.imageHeight + '/?' + this.state.tags
    console.log(url);
    window.open(url, "_blank")
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <form noValidate autoComplete="off" className="MainForm">
          <TextField
            id="standard-controlled"
            value={this.state.imageWidth}
            label="Width"
            margin="normal"
            onChange={this.handleChange('width')}
          />

          <TextField
            id="standard-controlled"
            value={this.state.imageHeight}
            label="Height"
            margin="normal"
            onChange={this.handleChange('height')}
          />

          <TextField
            id="standard-controlled"
            value={this.state.tags}
            label="Tags"
            margin="normal"
            onChange={this.handleChange('tags')}
          />

          <Button onClick={this.handleSubmit} variant="contained" color="primary">
            Generate image
          </Button>
        </form>
      </div>
    );
  }
}

export default App;