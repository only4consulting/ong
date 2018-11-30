import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

import Navbar from '../../components/Navbar'
import '../../styling/semantic.less'

const leftItems = [
  {
    as: 'a',
    content: 'Link 1',
    href: '#',
    icon: 'book',
    key: 'link1',
    target: '_blank',
  },
]
const rightItems = [
  {
    as: 'a',
    content: 'Link 2',
    href: '#',
    icon: 'book',
    key: 'link2',
    target: '_blank',
  },
  {
    as: 'a',
    content: 'Link 3',
    href: '#',
    icon: 'book',
    key: 'link3',
    target: '_blank',
  },
  {
    as: 'a',
    content: 'Link 4',
    href: '#',
    icon: 'book',
    key: 'link4',
    target: '_blank',
  },
]

const Layout = ({ children }) => (
  <Navbar leftItems={leftItems} rightItems={rightItems}>
    <Segment>
      <Grid>
        <Grid.Column computer={16} mobile={16}>
          {children}
        </Grid.Column>
      </Grid>
    </Segment>
  </Navbar>
)

export default Layout;
