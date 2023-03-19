
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

function shortAddress(price: string) {
    return 30
}


export default function Product({ item }: { item: Item}) {
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
                32
              </div>
            </div>
          </div>
        </div>
        </div>
    )

}