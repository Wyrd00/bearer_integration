/*
  The purpose of this component is to deal with scenario navigation between each views.

*/

import { RootComponent } from '@bearer/core'
import '@bearer/ui'

@RootComponent({
  name: 'action',
  group: 'feature'
})
export class FeatureAction {
  render() {
    return (
      <bearer-navigator btnProps={ { content:"teleport", kind:"primary" } } direction="right">
          <bearer-navigator-screen navigationTitle="Cities" name="name">
            <list-cities />
        </bearer-navigator-screen>
      </bearer-navigator>
    )
  }
}
