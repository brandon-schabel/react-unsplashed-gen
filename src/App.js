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
    let url = 'https://source.unsplash.com/' + this.state.imageWidth + 'x' + this.state.imageHeight + '/?' + this.state.tags
    console.log(url);
    window.open(url, "_blank")
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSelectChange = event => {
    let height = 0;
    let width = 0;
    console.log(event.target.value);
    this.setState({ selectorValue: event.target.value });
    switch(event.target.value) {
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
      case "4k-uwide":
        width = 3840
        height = 1440
        break;
      case "mbp16-18":
        width = 2880
        height = 1880
        break;
      default:
        width = 3840
        height = 2080
    }

    this.setState({
      imageWidth: width,
      imageHeight: height
    })
  }

  render() {
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

          <Select value={this.state.selectorValue}
                  onChange={this.handleSelectChange}
            >
            <MenuItem value={'1080'}>1080p</MenuItem>
            <MenuItem value={'1440'}>1440p</MenuItem>
            <MenuItem value={'4k'}>4k</MenuItem>
            <MenuItem value={'4k-uwide'}>4k Ultra Wide</MenuItem>
            <MenuItem value={'mbp16-18'}>Macbook Pro 2016-2018</MenuItem>
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