import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from 'src/interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';

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

  public create(carDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...carDto
    }
    this.carRepo.push(car)
    return this.carRepo.at(-1)
  }

  public update(id: string, updateCarDto: UpdateCarDto) {
    const index = this.carRepo.findIndex(e => e.id === id)
    this.carRepo[index] = { ...updateCarDto, id }
  }

  public delete(id: string) {
    const index = this.carRepo.findIndex(e => e.id === id)
    if(index === -1) throw new NotFoundException(`The car with ID: ${id} not found`)
    this.carRepo.splice(index, 1)
  }
}
