React-Material-Components-Web
==========

[![License: MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/react-material-components-web.svg)](https://badge.fury.io/js/react-material-components-web)


React wrapper of [Material Components Web](
https://github.com/material-components/material-components-web)

Demo
----

You can find live example demo at https://hardtack.github.io/react-material-components-web/

Goals
-----

*  Making fully-featured, customizable

*  Wrapping material-components-web with react in react way

*  Typing strictly with [flowtype](https://flowtype.org)

Features
--------

*  Typed strictly with [flow](https://flowtype.org)

   You can get a typing support with flow.

*  Stylesheet independent

   Since *Material Components Web* can be customized with scss,
   It does not depend on specific stylesheet.
   You can load your own stylesheet or default one.

*  Packaged each components individually

   Like *Material Components Web*, You can get all components individually,
   under [@react-mdc npm scope](https://www.npmjs.com/%7Ereact-mdc).

Getting Start
-------------

Install the library

``` bash
$ npm install --save @react-mdc/typography
```

Import stylesheet

``` html
<link type="text/css" href="/build/materialmaterial-components-web.min.css" rel="stylesheet" />

```

Or load using webpack and scss-loader

`my-mdc.scss`
``` scss

// My main Sass file.
$mdc-theme-primary: #9c27b0;
$mdc-theme-accent: #76ff03;
$mdc-theme-background: #fff;

@import "material-components-web/material-components-web";

```

`app.js`
``` javascript
import React from 'react';
import ReactDOM from 'react-dom';

import "./stylesheets/my-mdc.scss";
import Main from './main.js';

ReactDOM.render(<Main />, document.getElementById('root'));

```

And import *@react-mdc* and try it.

`main.js`
``` javascript

import React from 'react';
import {Typography, Title, Body2} from '@react-mdc/typography';

export default class Main extends React.Component {
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

$ cd path/to/react-material-components-web
$ lerna bootstrap

```

Documentation
-------------

TBD


Run Demo
-----------

``` shell
$ cd path/to/react-material-components-web
$ cd packages/demo
$ npm start

```

Build
-----

``` shell
$ lerna run build

```

Supported Components
--------------------

- Theme

- Typography

- Drawer

- Elevation

- Button

- Fab

- Card

- Form Field

- List

- Radio

- Ripple

- Checkbox

Ongoing Components
------------------

- Switch

- Menu

- Textfield

- Rtl

- Icon Toggle

- Select

- Layout Grid

- Snackbar
