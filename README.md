react-material-components-web
=============================

React wrapper for [Material Components Web](
https://github.com/material-components/material-components-web)

Usage
=====

``` javascript
import React from 'react';
import {Typography, Text} from 'react-material-compoents-web/typography';

export default class Example extends React.Component {
  render () {
    return (
      <Typography>
        <Text textStyle="title">
          This is an example
        </Text>
        <Text textStyle="body2">
          Hello world!
        </Text>
      </Typography>
    );
  }
}

```
