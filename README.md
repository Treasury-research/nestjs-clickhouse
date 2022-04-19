<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  NodeJS client for ClickHouse. Send query over HTTP interface use <a href="https://github.com/Treasury-research/nestjs-clickhouse">nestjs-clickhouse</a> library
</p>

### Installation

**Yarn**
```bash
yarn add tr-nestjs-clickhouse
```

**NPM**
```bash
npm install tr-nestjs-clickhouse --save
```

### Getting Started
Let's register the ClickHouseModule in `app.module.ts`

```typescript
import { Module } from '@nestjs/common'
import { ClickHouseModule} from 'tr-nestjs-clickhouse'

@Module({
    imports: [
          ClickHouseModule.forRoot({
            url: 'http://localhost',
            port: 8123,
            debug: true,
            database: 'gettingstarted',
          }),
    ],
})
export class AppModule {}
```
With Async
```typescript
import { Module } from '@nestjs/common';
import { RedisModule} from 'nestjs-redis'

@Module({
    imports: [
        RedisModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
              url: 'http://localhost',
              port: 8123,
              debug: true,
              database: 'gettingstarted',
            }),
            inject:[ConfigService]
        }),
    ],
})
export class AppModule {}
```

And use in your service
```typescript
import { Injectable } from '@nestjs/common';
import { ClickHouseRegistry } from 'tr-nestjs-clickhouse';

@Injectable()
export class TestService {
  constructor(
    private readonly clickHouseRegistry: ClickHouseRegistry
  ) { }
  async query(query: string, reqParams?: any) {
    return this.clickHouseRegistry.query(query, reqParams);
  }

  async insert(query: string, data?: any) {
    return this.clickHouseRegistry.insert(query, data);
  }
}
```

Options
```typescript
export interface ClickHouseOptions {
  url?: string;
  port?: number;
  debug?: boolean;
  database?: string;
  basicAuth?: BasicAuth;
  isUseGzip?: boolean;
  trimQuery?: boolean;
  usePost?: boolean;
  format?: string; // "json" || "csv" || "tsv"
  raw?: string;
  config?: Config;
  reqParams?: ReqParams;
}

type BasicAuth = {
  username: string;
  password: string;
};

type Config = {
  session_id: string;
  session_timeout: number;
  output_format_json_quote_64bit_integers: number;
  enable_http_compression: number;
  database: string;
};

type ReqParams = unknown;
```
That's it!