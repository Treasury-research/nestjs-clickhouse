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

/*
url: 'http://localhost',
	port: 8123,
	debug: false,
	basicAuth: null,
	isUseGzip: false,
	trimQuery: false,
	usePost: false,
	format: "json", // "json" || "csv" || "tsv"
	raw: false,
	config: {
		session_id                              : 'session_id if neeed',
		session_timeout                         : 60,
		output_format_json_quote_64bit_integers : 0,
		enable_http_compression                 : 0,
		database                                : 'my_database_name',
	},
	
	// This object merge with request params (see request lib docs)
	reqParams: {
		...
	}

  */
