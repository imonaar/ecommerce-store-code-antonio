import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import Container from "@/components/container";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

interface ProductPageProps {
    params: { productId: string }
}

export default async function ProductPage({ params }: ProductPageProps) {

    const product = await getProduct(params.productId)

    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    })

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product.images} />
                        <Info data = {product} />
                    </div>
                    <hr className="my-10" />
                    <ProductList title="Related Items" items={suggestedProducts} />
                </div>
            </Container>
        </div>
    )
}
