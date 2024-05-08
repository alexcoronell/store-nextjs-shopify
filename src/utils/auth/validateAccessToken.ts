import { cookies } from "next/headers"
import { GraphQLClientSingleton } from "app/graphql"
import { customerName } from "app/graphql/queries/customerName"

export const validateAccessToken = async() => {
    const cookiesStore = cookies()
    const accessToken = cookiesStore.get('accessToken')?.value

    const graphQLClient = GraphQLClientSingleton.getInstance().getClient()

    const { customer } = await graphQLClient.request(customerName, {
        customerAccessToken: accessToken
    })
    return customer
}