import { Component } from 'react';

import { View } from '../common';
import { Page } from '../Page';

export default class Custom extends Component {
  render() {
    return (
      <Page title="Custom">
        <View
          style={{
            marginTop: 20,
            overflow: 'hidden',
          }}
        >
          <p>To be continued...</p>
        </View>
      </Page>
    );
  }
}
