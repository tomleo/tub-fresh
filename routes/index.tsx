import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Home(props: PageProps) {
    const origin = `${props.url.protocol}//${props.url.host}`;
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <Header active={origin}></Header>
      <div class="p-4 mx-auto max-w-screen-md">
        Blog Goes here
      </div>
    </>
  );
}
