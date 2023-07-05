export interface Car {
  _id: string;
  acceleration: string;
  brand: string;
  calendar: Date[];
  color: string;
  dailyPrice: string;
  description: string;
  drivetrain: string;
  engine: string;
  equipment: string[];
  gas: string;
  img: string[];
  max: string;
  mileage: string;
  name: string;
  power: string;
  priceList: {
    '1-2 days': number;
    '3-5 days': number;
    '6-10 days': number;
    '10-30 days': number;
  };
  seats: string;
  torque: string;
  transmission: string;
  year: string;
}
