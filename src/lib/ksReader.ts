import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export const ksReader = createReader(process.cwd(), keystaticConfig);
