import * as yup from 'yup';
import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param,
  History
} from '@worldsibu/convector-core';

import { Land } from './land.model';

@Controller('land')
export class LandController extends ConvectorController<ChaincodeTx> {

  @Invokable()
  public async init() {
    // Mock Data
    let mockData = [
      new Land({ id: "1", RLRegistry: "Colombo", Extent: 50, ParentLandID: "nil", Owner: "Tomoko", Boundaries: [[0, 20], [10, 20], [10, 0], [0, 0]] }),
      new Land({ id: "2", RLRegistry: "Delkanda", Extent: 25, ParentLandID: "nil", Owner: "Brad", Boundaries: [[0, 20], [10, 20], [10, 0], [0, 0]] })
    ];
    await Promise.all(mockData.map(land => land.save()));
  }

  @Invokable()
  public async queryLand(@Param(yup.string()) id: string): Promise<Land> {
    return Land.getOne(id);
  }

  @Invokable()
  public async queryAllLands(): Promise<Land[]> {
    return Land.getAll();
  }

  @Invokable()
  public async createLand(@Param(Land) land: Land) {
    await land.save();
  }

  @Invokable()
  public async changeLandOwner(@Param(yup.string()) id: string, @Param(yup.string()) owner: string) {
    let land = await Land.getOne(id);
    land.Owner = owner;
    return land.save();
  }

  @Invokable()
  public async getHistoryForLand(@Param(yup.string()) id: string): Promise<History<Land>[]> {
    let land = await Land.getOne(id);
    return land.history();
  }
}