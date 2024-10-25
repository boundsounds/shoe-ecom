// src/types.ts
export interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    description: string;
    sizes?: string[];
}

export interface CartItem extends Product {
    size: string;
}