import sqlite = require("better-sqlite3");


export interface RawRowsColumnsReturn {
  rows: object[];
  columns: sqlite.ColumnDefinition[];
}
