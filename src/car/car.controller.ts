import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from 'src/interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('car')
export class CarController {

  constructor(private readonly carService: CarService) {

  }

  @Get()
  getAllCars(): Car[] {
    return this.carService.getAllCars()
  }
  
  @Get(':id')
  getById(@Param('id') id: string) {
    const car: Car = this.carService.getCarById(id)
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`)
    }
    return car
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() car: CreateCarDto) {
    console.log(car)
    return this.carService.create(car)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() car: Car) {
    return this.carService.update(id, car)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.carService.delete(id)
  }
}
