// parse environment variables
export const NODE_ENV = String(process.env.NODE_ENV);
export const PORT = process.env.PORT ? parseInt(process.env.PORT) : undefined;
export const ORIGINS_WHITELIST = process.env.ORIGINS_WHITELIST
  ? process.env.ORIGINS_WHITELIST.split(",")
  : [];
