import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Land extends ConvectorModel<Land> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.land';

  @Required()
  @Validate(yup.string())
  public RLRegistry: string;

  @Required()
  @Validate(yup.number())
  public Extent: number;

  @Required()
  @Validate(yup.string())
  public ParentLandID: string;

  @Required()
  @Validate(yup.string())
  public Owner: string;

  @Required()
  @Validate(yup.array().of(yup.array().of(yup.number())))
  public Boundaries: number[][];
}
