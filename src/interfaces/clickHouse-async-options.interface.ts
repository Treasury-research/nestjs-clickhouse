/** Dependencies **/

import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/** Interfaces **/
import { ClickHouseOptions } from './clickHouse-options.interface';
import { ClickHouseOptionsFactory } from './clickHouse-async-factory.interface';

export interface ClickHouseAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<ClickHouseOptionsFactory>;
  useExisting?: Type<ClickHouseOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<ClickHouseOptions> | ClickHouseOptions;
}
