import Link from "next/link";
import ComponentPage from "./_components/page";

export const metadata = {
  title: {
    absolute: "Home page",
  },
  description: "This is the home page",
};

export default async function Home({ searchParams, params }) {
  console.log(await searchParams);
  console.log(await params);
  return (
    <>
      <div className="mx-auto p-4">
        <h1>Home Page</h1>
        <Link href="/about">about</Link> |{" "}
        <Link href="/services">services</Link>｜<Link href="/blogs">Blogs</Link>{" "}
        | <Link href="/files">files</Link>|{" "}
        <Link href="/contacts">contacts</Link> |{" "}
        <Link href="/Dashboard">Dashboard</Link>
        <br />
        <h1>Welcome to Technical Agencies!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, qui
          repellat? Odit iste molestias delectus veniam tenetur ab doloremque?
          Cum accusamus repellendus nihil id quia vel praesentium ea,
          exercitationem ratione fugit autem hic, soluta atque quibusdam
          voluptatum nulla? Ipsum doloremque quod aperiam. Unde, dolores.
          Tempore, inventore, illum quae corporis quasi obcaecati libero porro
          repellendus temporibus minima illo iste eos, dicta repudiandae
          necessitatibus nulla perferendis praesentium! Nostrum, itaque
          blanditiis. Neque dolorem, libero sapiente rerum ut nam tempore?
          Molestiae repudiandae magni iste fugiat neque deleniti saepe quaerat
          aperiam, voluptatibus nisi rerum dicta similique labore optio
          voluptatum placeat eum eligendi atque laboriosam ducimus voluptas!
          Minus veritatis alias velit mollitia dolore, modi praesentium labore
          rerum voluptatibus eligendi necessitatibus temporibus tempora
          doloremque laborum vero. Quasi minima omnis laudantium exercitationem
          numquam provident esse dolorem ut corporis animi, hic soluta pariatur
          perspiciatis libero maiores. Voluptas, nostrum. Rem libero in minima
          ab dicta, cum alias dolore ad doloribus, quaerat illo fuga possimus
          mollitia soluta quos repudiandae perspiciatis voluptatem deserunt odit
          ipsam. Voluptatum optio tempore, aspernatur saepe officia inventore et
          autem incidunt quidem corporis recusandae necessitatibus molestias,
          qui est repellendus pariatur aperiam adipisci earum explicabo ea
          laboriosam veniam modi sunt repellat! Dolor dignissimos voluptas
          asperiores excepturi incidunt fugit. Iusto nemo consectetur ut
          repudiandae itaque. Dolorem pariatur adipisci doloribus nobis
          molestias mollitia accusantium quisquam quis sed! Praesentium, impedit
          minus? Laboriosam sequi necessitatibus deserunt nostrum facere eius
          voluptatem, libero optio, minima non ullam, maxime accusamus aliquid
          tempore obcaecati ex! Accusamus iste natus dicta cumque accusantium,
          veniam id facere illo est sit labore a fugiat aspernatur optio
          temporibus nemo. Molestias iure nam molestiae tempore necessitatibus
          repudiandae tempora, expedita ipsum ducimus itaque! Ex pariatur eius
          alias cum quas sit ab nesciunt, voluptate optio aut amet velit
          necessitatibus earum! Maxime eveniet vitae aperiam enim labore
          molestiae aspernatur illo nisi, atque, necessitatibus veniam quo ipsa.
        </p>
        <button>Login</button>
      </div>
      <ComponentPage />
    </>
  );
}
