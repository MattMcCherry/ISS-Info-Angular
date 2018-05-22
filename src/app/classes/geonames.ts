export class GeoNames {
  languages: string;
  distance: string;
  countryCode: string;
  countryName: string;
  status: GeoNamesStatus;
}

export class GeoNamesStatus {
  message: string;
  value: number;
}