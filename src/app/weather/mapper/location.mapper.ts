import { GeocodingResponse, GeocodingResult, LocationUI } from "../interfaces/location.interface";


export class LocationMapper {

  static GeocodingResultToLocationUI(location: GeocodingResult): LocationUI {
    return {
      id: location.id,
      latitude: location.latitude,
      longitud: location.longitude,
      timezone: location.timezone,
      elevation: location.elevation
    }
  }

  static GeocodingResponseToLocationUIArray(locations: GeocodingResponse): LocationUI[] {
    return locations.results?.map( LocationMapper.GeocodingResultToLocationUI ) || [];
  }

}
