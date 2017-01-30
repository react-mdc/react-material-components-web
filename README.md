react-mdcw
==========

React wrapper of [Material Components Web](
https://github.com/material-components/material-components-web)

Goals
-----

*  Making fully-featured, customizable

*  Wrapping material-components-web with react in react way

*  Typing strictly with [flowtype](https://flowtype.org)

Demo
----

You can find live example demo at https://hardtack.github.io/react-mdcw/

Usage
-----

``` javascript
import React from 'react';
import {Typography, Title, Body2} from 'react-mdcw/lib/typography';

export default class Example extends React.Component {
  render () {
    return (
      <Typography>
        <Title>
          This is an example
        </Title>
        <Body2>
          Hello world!
        </Body2>
      </Typography>
    );
  }
}
```

Setup for Development
---------------------

``` shell
$ cd path/to/react-mdcw
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

Progress
--------

- [x] Theme

- [x] Typography

- [x] Drawer

- [x] Elevation

- [x] Button

- [x] Fab

- [x] Card

- [x] Form Field

- [x] List

- [ ] Radio

- [ ] Ripple

- [ ] Snackbar

- [ ] Textfield
