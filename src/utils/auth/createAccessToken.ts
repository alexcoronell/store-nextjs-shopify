import { cookies } from "next/headers";
import { GraphQLClientSingleton } from "../../graphql/index";
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate";

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies();

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

  const { customerAccessTokenCreate } = await graphqlClient.request(
    customerAccessTokenCreateMutation,
    {
      email: email,
      password: password,
    }
  );

  const { accessToken, expiresAt } =
    customerAccessTokenCreate?.customerAccessToken;

  if (accessToken) {
    cookiesStore.set("accessToken", accessToken, {
      path: "/",
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict",
    });
  }

  return accessToken;
};
