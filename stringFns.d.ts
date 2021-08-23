import { RawRowsColumnsReturn } from "./types";
import type { CountryCode } from "libphonenumber-js";
export declare const rawToCSV: (rowsColumnsObject: RawRowsColumnsReturn) => string;
export declare const generatePassword: () => string;
export declare const getUID: () => string;
export declare const setPhoneNumberCountryCode: (countryCode: CountryCode) => void;
export declare const formatPhoneNumber: (unformattedPhoneNumber: string, countryCode?: CountryCode) => string;
