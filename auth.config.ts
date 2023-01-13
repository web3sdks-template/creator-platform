import { Web3sdksAuth } from "@web3sdks/auth/next";

export const { Web3sdksAuthHandler, getUser } = Web3sdksAuth({
  privateKey: process.env.PRIVATE_KEY as string,
  domain: "example.org",
});
