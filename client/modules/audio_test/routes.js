import React from 'react';
import { mount } from 'react-mounter';

// Define a layout from the shared components
import {
  ListLayout,
} from '/client/configs/components.js';

import AudioTestList from './containers/audio_test_list';

export default function ( injectDeps, { FlowRouter } ) {

  const ListLayoutCtx = injectDeps( ListLayout );

  FlowRouter.route('/audio', {
    name: 'audio.list',
    action() {
      mount( ListLayoutCtx, {
        content: () => ( <AudioTestList /> )
      });
    }
  });

}
