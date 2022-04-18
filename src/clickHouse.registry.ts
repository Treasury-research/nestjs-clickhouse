/** Services **/

import { Inject, Injectable } from '@nestjs/common';
import { ClickHouseOptions } from './interfaces/clickHouse-options.interface';
import { CLICKHOUSE_OPTIONS } from './constants/clickHouse.constant';
import { ClickHouse } from 'clickhouse';

@Injectable()
export class ClickHouseRegistry {
  private client: ClickHouse;
  constructor(
    @Inject(CLICKHOUSE_OPTIONS) clickHouseOptions: ClickHouseOptions
  ) {
    this.client = new ClickHouse(clickHouseOptions);
  }

  /**
   * query
   * @param query
   * @param reqParams
   * @returns
   */
  async query(
    query: string,
    reqParams?: Record<string, unknown>
  ): Promise<unknown[]> {
    return this.client.query(query, reqParams).toPromise();
  }

  /**
   * insert
   * @param query
   * @param data
   * @returns
   */
  async insert(
    query: string,
    data?: Record<string, unknown>
  ): Promise<unknown[]> {
    return this.client.insert(query, data).toPromise();
  }
}
