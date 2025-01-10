import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a
    .schema({
        WeddingInviteResponse: a.model({
            name: a.string(),
            phoneNumber: a.phone(),
            isPlusOne: a.boolean(),
            isAttending: a.boolean(),
            foodRestrictions: a.string(),
            musicSuggestions: a.string()
        }).authorization(allow => [allow.publicApiKey()]),
    })
    .authorization((allow) => [allow.resource(postConfirmation)]);
export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});