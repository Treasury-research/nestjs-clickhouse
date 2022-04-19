/** Interfaces **/

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
