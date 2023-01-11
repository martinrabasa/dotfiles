import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Wallpapers({ products }) {
    return (
        <>
            <Head>
                <title>Wallpapers | Peel and Stick</title>
                <meta
                    name="description"
                    content="Find out everything about peel and stick vinyls."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto text-neutral-900">
                <Header />

                <h1 className="font-bold text-4xl mt-20">
                    Peel and Stick Wallpapers
                </h1>
                <div className="grid grid-cols-1 gap-y-20 gap-x-14 py-14 md:grid-cols-2 xl:grid-cols-4">
                    {products &&
                        products.length > 0 &&
                        products
                            .filter(
                                (product) => product.category == "Wallpaper"
                            )
                            .map((product) => (
                                <Product
                                    key={product.link}
                                    title={product.title}
                                    link={product.link}
                                    img={product.image}
                                />
                            ))}
                </div>

                <Footer />
            </main>
        </>
    );
}

export const getStaticProps = async () => {
    const products = await import("../public/data/products.json").then(
        (res) => res.default
    );

    return {
        props: { products },
    };
};