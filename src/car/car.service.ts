import { Injectable } from '@nestjs/common';
import { Car } from 'src/interfaces/car.interface';

@Injectable()
export class CarService {

  private carRepo: Car[] = [
    { id: 1, brand: "Toyota" },
    { id: 2, brand: "Cadillac" },
    { id: 3, brand: "Aston Martin" },
    { id: 4, brand: "Chevrolet" },
    { id: 5, brand: "Audi" },
    { id: 6, brand: "Ford" },
    { id: 7, brand: "Ford" },
    { id: 8, brand: "Audi" },
    { id: 9, brand: "Ford" },
    { id: 10, brand: "Buick" }
  ]

  public getAllCars(): Car[] {
    return this.carRepo
  }

  public getCarById(id: number): Car {
    return this.carRepo.find(e => e.id === id)
  }
}
