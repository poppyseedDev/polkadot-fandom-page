interface Metadata {
    name: string;
    description: string;
    image: string;
    external_url?: string;
    animation_url?: string;
  }
  
export interface Item {
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

export type GraphLike<T> = { data: T } | T

export type SingleItem = GraphLike<{ item: Item; } | null>

export type  MultipleItems = GraphLike<{ items: Item[]; } | null>

