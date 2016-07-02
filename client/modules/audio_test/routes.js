import React from 'react';
import { mount } from 'react-mounter';

// Define a layout from the shared components
import {
  LayoutList,
} from '/client/configs/components.js';

import AudioTestList from './containers/audio_test_list';

export default function ( injectDeps, { FlowRouter } ) {

  const LayoutListCtx = injectDeps( LayoutList );

  FlowRouter.route('/audio', {
    name: 'audio.list',
    action() {
      mount( LayoutListCtx, {
        content: () => ( <AudioTestList /> )
      });
    }
  });

}
