/* @flow */
import React from 'react';

import {Ripple} from '@react-mdc/ripple';
import {Elevation} from '@react-mdc/elevation';

import {Pen} from 'app/js/components/icon';
import PageTitle from 'app/js/components/page-title';
import {Section, SectionTitle} from 'app/js/components/section';

import styles from './styles.css';

export default class RippleExample extends React.Component {
  render (): React.Element<*> {
    return (
      <div>
        <PageTitle>
          Ripple Examples
        </PageTitle>
        <Section>
          <SectionTitle>
            Bounded
          </SectionTitle>
          <Ripple
            wrap={<Elevation wrap={<div />} />}
            className={styles.bounded}
            zSpace={2}>
            Interact with me
          </Ripple>
        </Section>
        <Section>
          <SectionTitle>
            Unbounded
          </SectionTitle>
          <Ripple className={styles.unbounded} unbounded>
            <Pen />
          </Ripple>
        </Section>
        <Section>
          <SectionTitle>
            Primary
          </SectionTitle>
          <Ripple
            color="primary"
            wrap={<Elevation wrap={<div />} />}
            className={styles.bounded}
            zSpace={2}>
            Interact with me
          </Ripple>
        </Section>
        <Section>
          <SectionTitle>
            Accent
          </SectionTitle>
          <Ripple
            color="accent"
            wrap={<Elevation wrap={<div />} />}
            className={styles.bounded}
            zSpace={2}>
            Interact with me
          </Ripple>
        </Section>
      </div>
    );
  }
}
