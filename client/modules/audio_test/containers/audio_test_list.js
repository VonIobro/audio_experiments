import { useDeps, composeWithTracker, composeAll } from 'mantra-core'
import AudioTestList from '../components/audio_test_list'
import { authComposer } from 'meteor-auth'

export const composer = ( { context }, onData ) => {

  onData( null, {} )

}

export default composeAll(
  composeWithTracker( composer ),
  composeWithTracker( authComposer ),
  useDeps(),
)( AudioTestList )
