import type * as sqlite from "better-sqlite3";


export interface RawRowsColumnsReturn {
  rows: object[];
  columns: sqlite.ColumnDefinition[];
}
