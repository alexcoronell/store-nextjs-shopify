import { getProducts } from 'app/services/shopify/products'
import {Chat} from '../../components/chat/chat'
import { createAgent } from 'app/utils/openai/createAgent'

export default async function ChatPage(){

    const products = await getProducts()
    const productTitles = products.map(item => item.title)
    const flatProductTitles = productTitles.join("\n")
    console.log(flatProductTitles)

    const agent = createAgent(flatProductTitles)

    return(
        <>
            <h1>ChatAI</h1>
            <Chat agent={agent}/>
        </>
    )
}