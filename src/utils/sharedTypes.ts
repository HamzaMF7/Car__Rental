export interface Car {
  CarID: number;
  CarName: string;
  Brand: string;
  Price: number;
  Capacity: number;
  Image: string;
  CategoryId: number;
  CategoryName: string;
  FuelType: string;
  TransmitionType: string;
  RentalFrequency: number;
  RateCount: number,
}

export interface DetailedCar extends Car {
  Model: string;
  Hybrid: boolean;
  Electric: boolean;
  AirConditioner: boolean;
  GPSInstalled: boolean;
  BluetoothEnabled: boolean;
}

export interface FilterBar {
  sortMenu: {
    id: number;
    title: string;
  }[];
  brandsMenu: {
    id: number;
    label: string;
    checked: boolean;
  }[];
  categoryMenu: {
    id: number;
    label: string;
    checked: boolean;
  }[];
}
