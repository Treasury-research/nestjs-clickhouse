/** Modules **/

import { DynamicModule, Module, Provider, ValueProvider } from '@nestjs/common';
import { ClickHouseOptionsFactory } from './interfaces/clickHouse-async-factory.interface';
import { ClickHouseAsyncOptions } from './interfaces/clickHouse-async-options.interface';
import { ClickHouseOptions } from './interfaces/clickHouse-options.interface';
import { CLICKHOUSE_OPTIONS } from './constants/clickHouse.constant';
import { ClickHouseRegistry } from './clickHouse.registry';

@Module({})
export class ClickHouseModule {
  /**
   * forRoot
   * @param options
   * @returns
   */
  static forRoot(options?: ClickHouseOptions): DynamicModule {
    const ClickHouseOptionsProvider: ValueProvider<
      ClickHouseOptions | undefined
    > = {
      provide: CLICKHOUSE_OPTIONS,
      useValue: options,
    };

    return {
      module: ClickHouseModule,
      providers: [
        /** Provider **/
        ClickHouseOptionsProvider,

        /** Services **/
        ClickHouseRegistry,
      ],
      exports: [
        /** Services **/
        ClickHouseRegistry,
        CLICKHOUSE_OPTIONS,
      ],
    };
  }

  public static forRootAsync(options: ClickHouseAsyncOptions): DynamicModule {
    const providers: Provider[] = this.createAsyncProviders(options);

    return {
      module: ClickHouseModule,
      providers: [
        /** Providers **/
        ...providers,

        /** Services **/
        ClickHouseRegistry,
      ],
      imports: options.imports,
      exports: [
        /** Services **/
        ClickHouseRegistry,
        CLICKHOUSE_OPTIONS,
      ],
    };
  }

  private static createAsyncProviders(
    options: ClickHouseAsyncOptions
  ): Provider[] {
    const providers: Provider[] = [this.createAsyncOptionsProvider(options)];

    if (options.useClass) {
      providers.push({
        provide: options.useClass,
        useClass: options.useClass,
      });
    }

    return providers;
  }

  private static createAsyncOptionsProvider(
    options: ClickHouseAsyncOptions
  ): Provider {
    if (options.useFactory) {
      return {
        name: CLICKHOUSE_OPTIONS,
        provide: CLICKHOUSE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    return {
      name: CLICKHOUSE_OPTIONS,
      provide: CLICKHOUSE_OPTIONS,
      useFactory: async (optionsFactory: ClickHouseOptionsFactory) => {
        return optionsFactory.createClickHouseOptions();
      },
      inject: [options.useExisting! || options.useClass!],
    };
  }
}
