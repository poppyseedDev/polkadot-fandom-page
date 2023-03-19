import Image from "next/image";
import ProductAction from "./ProductAction";
import { shortAddress, formatBalance } from "@/helper";

interface Metadata {
    name: string;
    description: string;
    image: string;
    external_url?: string;
    animation_url?: string;
  }
  
  interface Item {
    id: string;
    createdAt: Date;
    name: string;
    metadata: string;
    currentOwner: string;
    image?: string;
    meta?: Metadata;
    price: bigint;
    issuer: string;
  }

export default function Product({ item }: { item: Item}) {
  const price = formatBalance(item.price)

    return (
        <div className="w-11/12 max-w-5xl mx-auto mt-8 lg:grid lg:grid-cols-2 lg:gap-x-16">
        {/* Product details */}
        <div>
          <div className="flex flex-col gap-4">
            <div className="w-full flex items-center justify-between gap-4">
              <hgroup>
                <h2 className="text-xl lg:!text-2xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <h3 className="text-gray-500 text-base leading-tight">
                Owned by {' '}
                <a className="text-blue-500 hover:underline" target="_blank" href={`https://kodadot.xyz/bsx/u/${item.currentOwner}`} >
                { shortAddress(item.currentOwner)}
                </a>
                </h3>
              </hgroup>
              <div className="bg-[#E8E7E5] rounded-full px-6 py-2 text-lg text-gray-900 font-bold">
                {price}
              </div>
            </div>
          </div>

          
          <section
          aria-labelledby="information-heading"
          className="mt-12 pt-6 border-t-1 border-gray-200"
        >
          <h2 id="information-heading" className="sr-only">
            Product information
          </h2>

          <div className="mt-4 space-y-6">
            <p
              className={"text-base text-gray-600"}
              dangerouslySetInnerHTML={{ __html: item.meta?.description || item.name }}
            />
          </div>
        </section>
      </div>

      {/* Product image */}
      <div
        className="aspect-square w-full bg-white rounded-xl border-2 border-gray-200 mt-12 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-start"
      >
        <div className="rounded-lg overflow-hidden">
            <Image
              id="productImage"
              src="/Luna1.jpeg"
              alt={item.name}
              width="400"
              height="400"
              className="w-full h-full object-center object-contain"
            />

        </div>
      </div>

      {/* Product form */}
      <div className="mt-12 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
        <section aria-labelledby="options-heading">
          <div className="mt-4">
            <ProductAction id={item.id} />
          </div>
        </section>
      </div>
    </div>
    )

}