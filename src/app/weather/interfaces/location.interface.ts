export interface GeocodingResponse {
  results?: GeocodingResult[];
  generationtime_ms: number;
}

export interface GeocodingResult {
  id: number;

  name: string;
  latitude: number;
  longitude: number;
  elevation?: number;

  feature_code?: string;

  country_code: string;
  country: string;
  country_id?: number;

  timezone: string;
  population?: number;

  // Admin divisions (opcionales)
  admin1?: string;
  admin2?: string;
  admin3?: string;
  admin4?: string;

  admin1_id?: number;
  admin2_id?: number;
  admin3_id?: number;
  admin4_id?: number;

  postcodes?: string[];
}

export interface LocationUI {
  id: number,
  latitude: number,
  longitud: number,
  timezone: string,
  elevation?: number
}
