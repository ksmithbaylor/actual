import React from 'react';

import { View } from '../common';
import { Page } from '../Page';

class Custom extends React.Component {
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

export default Custom;
