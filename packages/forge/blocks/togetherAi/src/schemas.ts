// Do not edit this file manually
import { parseBlockCredentials, parseBlockSchema } from "@typebot.io/forge";
import { auth } from "./auth";
import { togetherAiBlock } from "./index";

export const togetherAiBlockSchema = parseBlockSchema(togetherAiBlock);
export const togetherAiCredentialsSchema = parseBlockCredentials(
  togetherAiBlock.id,
  auth,
);
