import { Controller, Get, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from 'src/interfaces/car.interface';

@Controller('car')
export class CarController {

  constructor(private readonly carService: CarService){

  }

  @Get()
  getAllCars(): Car[] {
    return this.carService.getAllCars()
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const parseId = parseInt(id)
    return this.carService.getCarById(parseId)
  }
  
}
