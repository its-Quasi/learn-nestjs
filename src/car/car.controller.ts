import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from 'src/interfaces/car.interface';
import { SourceTextModule } from 'vm';

@Controller('car')
export class CarController {

  constructor(private readonly carService: CarService) {

  }

  @Get()
  getAllCars(): Car[] {
    return this.carService.getAllCars()
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    const car: Car = this.carService.getCarById(id)
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`)
    }
    return car
  }

  @Post()
  create(@Body() car: Car) {
    console.log(car)
    return this.carService.create(car)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() car: Car) {
    return this.carService.update(id, car)
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    this.carService.delete(id)
  }
}
