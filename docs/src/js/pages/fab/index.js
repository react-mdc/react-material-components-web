/* @flow */
import React from 'react';

import {Fab, Icon} from '@react-mdc/fab';
import {Title, Typography} from '@react-mdc/typography';

import {Pen, MaterialIcon} from 'app/js/components/icon';
import {Section} from 'app/js/components/section';

export default class FabExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Fab Examples
        </Title>
        <Section>
          <Fab><Icon><Pen /></Icon></Fab>
        </Section>
        <Section>
          <Fab mini><Icon><Pen /></Icon></Fab>
        </Section>
        <Section>
          <Fab plain><Icon><MaterialIcon>face</MaterialIcon></Icon></Fab>
        </Section>
        <Section>
          <Fab plain mini><Icon><MaterialIcon>face</MaterialIcon></Icon></Fab>
        </Section>
      </Typography>
    );
  }
}
