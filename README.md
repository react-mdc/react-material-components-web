react-material-components-web
=============================

React wrapper for [Material Components Web](
https://github.com/material-components/material-components-web)

Goals
-----

*  Making fully-featured, customizable

*  Wrapping material-components-web with react in react way

*  Typing strictly with [flowtype](https://flowtype.org)

Usage
-----

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

Setup for Development
---------------------

``` shell
$ cd path/to/react-material-components-web
$ npm install
```

Run Example
-----------

``` shell
$ npm run example
```

Build
-----

``` shell
$ npm run build
```

