import sqlite = require("better-sqlite3");


export type RawRowsColumnsReturn = {
  rows: object[],
  columns: sqlite.ColumnDefinition[]
};
