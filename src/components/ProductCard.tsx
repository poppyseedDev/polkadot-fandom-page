import Head from 'next/head'
import Image from 'next/image'
import IconCart from './IconCart';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { formatBalance, sanitizeUri } from '@/helper';

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

export default function ProductCard({ item }: { item: Item } ) {
    const price = formatBalance(item.price)
    const imageMaybe = sanitizeUri(item.image || item.meta?.image)
    const image: string = imageMaybe ? imageMaybe : "/Luna1.jpeg"

    return (
      <Link
        key={item.id}
        href={`/products/${item.id}`}
        className="group"
      >
        <div
        className=" aspect-square w-full bg-white rounded-xl overflow-hidden border-2 border-gray-200 transition-all duration-500 relative"
        >
          <img
            src={image}
            alt="image"
            width="400"
            height="400"
            className="w-full h-full object-center object-contain absolute block"
          />
          <div
            className="w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.6)] opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <IconCart size={30} />
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <h3 className="text-lg text-gray-800 font-medium relative">
            {item.name}
            <span
              className="bg-gray-800 h-[3px] w-0 group-hover:!w-full absolute bottom-[-2px] left-0 transition-all duration-400"
            />
          </h3>
          <strong className="text-lg font-bold text-gray-800">
            {price}
          </strong>
        </div>
      </Link>
    )
  }