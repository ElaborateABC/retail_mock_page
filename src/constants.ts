export interface SaleType {
    retailSales: number,
    retailerMargin: number,
    unitsSold: number,
    weekEnding: string,
    wholesaleSales: number,
}

export interface Review {
    customer: string,
    review: string,
    score: number,
}

export interface ProductType {
    brand: string,
    details: string[],
    id: string,
    image: string,
    retailer: string,
    reviews: Review[],
    sales: SaleType[],
    subtitle: string,
    tags: string[],
    title: string,
}
