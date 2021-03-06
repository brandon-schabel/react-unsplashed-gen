import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageWidth: '3840',
      imageHeight: '2160',
      inputWidth: '',
      inputHeight: '',
      tags: 'nature',
      selectorValue: '',
      
    }
  }

  generateUrl = (imageWidth, imageHeight, tags) => {
    let generatedUrl = 'https://source.unsplash.com/' + imageWidth + 'x' + imageHeight + '/?' + tags

    return generatedUrl;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let height = 0;
    let width = 0;
    switch(this.state.selectorValue) {
      case "1080":
        width = 1920
        height = 1080
        break;
      case "1440":
        width = 2560
        height = 1440
        break;
      case "4k":
        width = 3840
        height = 2080
        break;
      case "8k":
        width = 7680
        height = 4320
        break;
      case "4k-uwide1440":
        width = 3840
        height = 1440
        break;
      case "4k-uwide1600":
        width = 3840
        height = 1600
        break;
      case "mbp16-18":
        width = 2880
        height = 1880
        break;
      case "iphone-x":
        width = 1125
        height = 2436
        break;
      case "iphone-xs-max":
        width = 1242
        height = 2688
        break;
      case "galaxy-s9":
        width = 1440
        height = 2960
        break;

      default:
        width = 3840
        height = 2080
    }

    if(this.state.inputHeight) {
      height = this.state.inputHeight
    }
    if(this.state.inputWidth) {
      width = this.state.inputWidth
    }

    /*
    this.setState({
      imageWidth: width,
      imageHeight: height,
    }) */

    console.log("submit", width, height);

    let url = 'https://source.unsplash.com/' + width + 'x' + height + '/?' + this.state.tags
    console.log(url);
    window.open(url, "_blank")
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });

    console.log(this.state)
  };

  handleSelectChange = event => {
    this.setState({ selectorValue: event.target.value,
                    inputHeight: '',
                    inputWidth: ''
     });
    
  }

  render() {
    return (
      <div className="App">
        <form noValidate autoComplete="off" className="MainForm">
          <TextField
            value = {this.state.inputWidth}
            id="standard-controlled"
            label="Width"
            margin="normal"
            onChange={this.handleChange('inputWidth')}
          />

          <TextField
          value ={this.state.inputHeight}
            id="standard-controlled"
            label="Height"
            margin="normal"
            onChange={this.handleChange('inputHeight')}
          />

          <Select value={this.state.selectorValue}
                  onChange={this.handleSelectChange}
            >
            <MenuItem value={'1080'}>1080p</MenuItem>
            <MenuItem value={'1440'}>1440p</MenuItem>
            <MenuItem value={'4k'}>4k</MenuItem>
            <MenuItem value={'8k'}>8k</MenuItem>
            <MenuItem value={'4k-uwide1440'}>4k Ultra Wide 1440</MenuItem>
            <MenuItem value={'4k-uwide1600'}>4k Ultra Wide 1600</MenuItem>
            <MenuItem value={'mbp16-18'}>Macbook Pro 2016-2018</MenuItem>
            <MenuItem value={'iphone-x'}>iPhone X/XS</MenuItem>
            <MenuItem value={'iphone-xs-max'}>iPhone XS Max</MenuItem>
            <MenuItem value={'galaxy-s9'}>Galaxy S9 and S9+</MenuItem>
          </Select>

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