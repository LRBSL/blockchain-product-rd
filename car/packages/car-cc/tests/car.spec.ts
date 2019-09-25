// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Car, CarController } from '../src';

describe('Car', () => {
  let adapter: MockControllerAdapter;
  let carCtrl: ConvectorControllerClient<CarController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    carCtrl = ClientFactory(CarController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'CarController',
        name: join(__dirname, '..')
      }
    ]);

    adapter.addUser('Test');
  });
  
  it('should create a default model', async () => {
    const modelSample = new Car({
      id: uuid(),
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await carCtrl.$withUser('Test').create(modelSample);
  
    const justSavedModel = await adapter.getById<Car>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});