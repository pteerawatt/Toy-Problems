class ParkingSystem {
  big: number;
  medium: number;
  small: number;
  constructor(big: number, medium: number, small: number) {
      this.big = big;
      this.medium = medium;
      this.small = small;
  }

  addCar(carType: number): boolean {
      if (carType === 1) return this.big > 0 ? !!this.big-- : false;
      else if (carType === 2) return this.medium > 0 ? !!this.medium-- : false;
      else if (carType === 3) return this.small > 0 ? !!this.small-- : false;
      else return false;
  }
}