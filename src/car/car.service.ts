import { Injectable } from '@nestjs/common';
import { targetModulesByContainer } from '@nestjs/core/router/router-module';
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

  public getCarById(id: number): Car | undefined {
    return this.carRepo.find(e => e.id === id)
  }

  public create(car: Car) {
    this.carRepo.push({
      id: this.carRepo.length + 1,
      ...car
    })
    return this.carRepo.at(-1)
  }

  public update(id: number, car: Car) {
    console.log(id, car)
    const index = this.carRepo.findIndex(e => e.id === id)
    this.carRepo[index] = {id, ...car}
  }

  public delete(id: number) {
    const index = this.carRepo.findIndex(e => e.id === id)
    this.carRepo.splice(index,1)
  }
}
