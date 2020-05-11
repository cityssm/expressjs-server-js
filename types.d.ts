import sqlite = require("better-sqlite3");
export declare type RawRowsColumnsReturn = {
    rows: object[];
    columns: sqlite.ColumnDefinition[];
};
