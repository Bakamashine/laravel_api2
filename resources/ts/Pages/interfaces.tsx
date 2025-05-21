// export interface Image {
//     id?: number,
//     urls_image?: string
// }

// interface ImageInterface {
//     product_id: number,
//     image_urls: string
// }
// type Image = FileList<ImageInterface>[];

interface Image {
    id: number;
    product_id: number;
    image_urls: string;
}

/**
 * Поля Категории
 */
export interface Category {
    id?: number;
    name: string;
    description: string;
}

/**
 * Принятие данных с контроллера с пагинацией
 */
export interface CategoryOutput {
    current_page: number;
    data: Category[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        active: boolean;
        label: string;
        url: string;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface Product {
    id: number;
    name: string;
    // category_name: string;
    category: Category;
    description: string;
    price: number;
    image: Image[];
    default_img?: string;
}

export interface ProductInput {
    name: string;
    category_id: number;
    description: string;
    price: number;
    image: FileList[] | null;
}

export interface ProductOutput extends Omit<CategoryOutput, "data"> {
    data: Product[];
}

export interface CategoryInput extends Omit<Category, "id"> {
    id: number;
}

export interface ProductUpdate extends Omit<ProductInput, "id" | "image"> {
    id: number;
    image?: Image[];
}
