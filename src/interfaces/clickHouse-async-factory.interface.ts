/** Interfaces **/

import { ClickHouseAsyncOptions } from './clickHouse-async-options.interface';

export interface ClickHouseOptionsFactory {
  createClickHouseOptions():
    | Promise<ClickHouseAsyncOptions>
    | ClickHouseAsyncOptions;
}
