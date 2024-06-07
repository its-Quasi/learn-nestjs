import { Injectable } from '@nestjs/common';
import { Car } from 'src/interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarService {

  private carRepo: Car[] = [
    { id: uuid(), brand: "Toyota", model: '1' },
    { id: uuid(), brand: "Cadillac", model: '1' },
    { id: uuid(), brand: "Aston Martin", model: '1' }
  ]

  public getAllCars(): Car[] {
    return this.carRepo
  }

  public getCarById(id: string): Car | undefined {
    return this.carRepo.find(e => e.id === id)
  }

  public create(car: CreateCarDto) {
    this.carRepo.push({
      id: uuid(),
      ...car
    })
    return this.carRepo.at(-1)
  }

  public update(id: string, car: Car) {
    console.log(id, car)
    const index = this.carRepo.findIndex(e => e.id === id)
    this.carRepo[index] = { id, ...car }
  }

  public delete(id: string) {
    const index = this.carRepo.findIndex(e => e.id === id)
    this.carRepo.splice(index, 1)
  }
}
