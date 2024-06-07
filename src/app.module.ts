import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CarModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
