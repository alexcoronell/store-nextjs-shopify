import { Metadata } from "next";
import { MainProducts } from "app/components/home/MainProducts"

export const metadata: Metadata = {
  title: "Future World",
  description: "Welcome to the future world, an ecommerce from other century",
  keywords: ["ecommerce", "future", "world", "technology"]
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  )
}
