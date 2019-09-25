import * as yup from 'yup';
import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Car } from './car.model';

@Controller('car')
export class CarController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async create(
    @Param(Car)
    car: Car
  ) {
    await car.save();
  }

  @Invokable()
  public async get(
    @Param(yup.string())
    id: string
  ) {
    return await Car.getOne(id);
  }
}