import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class GenButton extends Component {
  render() {
    return (
        <Button onClick={()=> window.open("https://source.unsplash.com/3840x2160/?nature", "_blank")} variant="contained" color="primary">
          4k Image
        </Button>
    );
  }
}

export default GenButton;
