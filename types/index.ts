
export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface User {
    id: number;
    first_name: string;
    name: string;
    last_name: string;
    email: string;
    phone: string;
    avatar?: string;
    // created_at: string;
    // updated_at: string;
    // products: ProductItem[],
    // addresses: AddressItem[],
    // orders: OrderItem[],
    [key: string]: unknown; // This allows for additional properties...
}


export interface CategoryItem {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    created_at: string | null;
    products_count: number | 0;
}

export interface WishlistItemType {
    id: string;
    user_id: string;
    product_id: string;
    created_at: string | null;
}

export interface WishlistDataType {
    prev_page_url: string;
    next_page_url: string;
    last_page: string;
    current_page: number;
    data: WishlistItemType[];
}

export interface ReviewItem {
    id: string;
    product_id: string;
    comment: string;
    user_id: string;
    rating: number;
    created_at: string | null;
    user: User;
    product: ProductItem;
}

export interface CategoryType {
    prev_page_url: string;
    next_page_url: string;
    last_page: string;
    current_page: string;
    data: CategoryItem[];
}

export interface ProductItem {
    id: string;
    title: string;
    slug: string;
    category: CategoryItem;
    user: User | null;
    reviews: ReviewItem[],
    description: string | null;
    summary: string | null;
    images: string | null;
    status: string | null;
    price: number | null;
    stock: number | null;
    created_at: string | null;
    is_active: boolean;
}

export interface ProductType {
    prev_page_url: string;
    next_page_url: string;
    last_page: string;
    current_page: string;
    data: ProductItem[];
}

export interface OrderItem {
    id: string;
    address_id: string;
    status: string;
    address: AddressItemProp;
    user: User | null;
    user_id: string;
    payment_method: string | null;
    payment_status: string | null;
    total_amount: number | null;
    delivery_cost: number | null;
    created_at: string | null;
    order_items: []
}

export interface OrderType {
    prev_page_url: string;
    next_page_url: string;
    last_page: string;
    current_page: number;
    data: OrderItem[];
}

export interface AddressItemProp {
    id: string;
    user_id: string;
    // phone: string | null;
    street: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postal_code: string | null;
    is_default: boolean;
    created_at: string;
}

export interface AddressTypeProp {
    prev_page_url: string;
    next_page_url: string;
    last_page: string;
    current_page: string;
    data: AddressItemProp[];
}

export interface OrderItemsType {
    id: number,
    order_id: string;
    product_id: string;
    quantity: number;
    unit_price: number;
    created_at: string;
    product: ProductItem;
    order: OrderItem;
}

export interface OrderItemsPropType {
    prev_page_url: string;
    next_page_url: string;
    last_page: string;
    current_page: string;
    data: OrderItemsType[];
}

export interface UserType {
    prev_page_url: string;
    next_page_url: string;
    last_page: string;
    current_page: string;
    data: User[];
}