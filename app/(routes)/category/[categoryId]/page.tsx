import { getColors } from "@/actions/get-colors";
import { getCategory } from "@/actions/get-category";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/container";
import Filter from "@/app/(routes)/category/[categoryId]/_components/filter";
import NoResult from "@/components/no-result";
import ProductCard from "@/components/product-card";
import MobileFilter from "./_components/mobile-filter";

export const revalidate = 0


interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })

    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)

    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilter sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                            <Filter valueKey="colorId" name="Colors" data={colors} />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {
                                products.length === 0 ? <NoResult /> : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {
                                            products.map(item => <ProductCard key={item.id} data={item} />)
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>   
                </div>
            </Container>
        </div>
    )
}
