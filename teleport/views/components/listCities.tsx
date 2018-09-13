import { BearerFetch, Component, Intent } from '@bearer/core'

@Component({
  tag: 'list-cities',
  shadow: true
})
export class ListCities {
  @Intent('listCities') fetcher: BearerFetch
  render() {
    return <bearer-scrollable fetcher={this.fetcher} />
  }
}
