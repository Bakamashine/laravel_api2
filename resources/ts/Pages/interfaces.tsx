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
    next_page_url: string|null;
    path: string;
    per_page: number;
    prev_page_url: string|null;
    to: number;
    total: number;
}