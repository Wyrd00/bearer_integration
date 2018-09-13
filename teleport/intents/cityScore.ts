import { FetchData, TnoAuthContext, TFetchDataCallback } from '@bearer/intents'
// Uncomment this line if you need to use Client
import Client from './client'

export default class CityScoreIntent {
  static intentName: string = 'cityScore'
  static intentType: any = FetchData

  
  static action(context: TnoAuthContext, params: any, body: any, callback: TFetchDataCallback) {
	Client().get('/api/urban_areas/')
      .then(({ data }) => {
        callback({ data })
      })
      .catch(error => {
      	callback({ error: error.toString() })
      })
  }
}

