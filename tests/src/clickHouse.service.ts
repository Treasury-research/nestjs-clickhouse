/** Services **/

import { Injectable } from '@nestjs/common';
import { ClickHouseRegistry } from '../../src';

@Injectable()
export class ClickHouseService {
  constructor(private readonly clickHouseRegistry: ClickHouseRegistry) {}

  async query(query: string, reqParams?: any) {
    return this.clickHouseRegistry.query(query, reqParams);
  }

  async insert(query: string, data?: any) {
    return this.clickHouseRegistry.insert(query, data);
  }
}
