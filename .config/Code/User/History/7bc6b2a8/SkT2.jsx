import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home({ posts }) {
    return (
        <div className="container">
            <Head>
                <title>Estudio de Abogados</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="">
                <section className="">
                    <h1>Castillo-Milanesi</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet accusantium reprehenderit officia, voluptatem nesciunt ipsa hic voluptates obcaecati? Voluptate temporibus minus illum, adipisci quas odio? Assumenda nihil nam necessitatibus!</p>
                    <button>CONSULTAS</button>
                    <div className="">
                        <Image alt="image" src="/landing2aaa.jpg" layout="fill" />
                    </div>
                </section>

                <section className="practice-areas">
                    <h2 className="">
                        Areas de Actuación
                    </h2>
                    <div>
                        <div>
                            <h3>Derecho Familiar</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam, tenetur fugiat autem cumque repudiandae consequatur sapiente eum impedit iure error quo quas at, maxime itaque nostrum illum quam! Vel.</p>
                            <a href="">Saber mas</a>
                        </div>
                    </div>
                </section>

                <section className="professionals">
                    <h1>Abogados</h1>
                    <div>
                        <Image src="/landingssss.jpg" layout="fill" alt="image" />
                        <h3>Dr. Silvio Milanesi</h3>
                        <span>ABOGADO</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam nam nisi optio, odit temporibus, qui necessitatibus, quibusdam autem aspernatur repellendus. Vel eius placeat nemo laboriosam ex saepe ea vero!</p>
                        <div>
                            <div className="social-media"></div>
                            <a href="">Saber más</a>
                        </div>
                    </div>
                </section>

                <div className="faq-contact">
                    <div className="faq">
                        <span>¿Tiene dudas?</span>
                        <h2>Preguntas frecuentes</h2>
                        <div>¿Cuando consultar a un abogado?</div>
                    </div>
                    <form
                        action="https://formsubmit.co/46c8e5f4ab3f3c79b050148e5511b3cd"
                        method="POST"
                        className=""
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className=""
                            required
                        />
                        <input
                            type="text"
                            name="phone-number"
                            placeholder="Telefono"
                            required
                        />
                        <textarea
                            name="message"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Mensaje"
                            className=""
                            required
                        ></textarea>
                        <button className="btn-submit" type="submit">Realizar consulta</button>
                    </form>
                </div>

                <section className="">
                    <h2>Publicaciones</h2>
                    {posts &&
                        posts.map((post, index) => (
                            <article key={index} className="">
                                <header className="">
                                    {post.title}
                                </header>
                                <footer className="">
                                    {post.author}
                                </footer>
                                <a
                                    href={`/posts/${post.slug}`}
                                    className=""
                                ></a>
                            </article>
                        ))}
                </section>
            </main>

            <Footer />
        </div>
    );
}

export const getStaticProps = async () => {
    const posts = await import("../public/data/posts.json").then(
        (res) => res.default
    );

    return {
        props: { posts },
        //revalidate: 60,
    };
};