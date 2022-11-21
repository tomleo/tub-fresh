import { Head } from "$fresh/runtime.ts";
import Header from "../../components/Header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { State } from "../../utils/state.ts";
import { listPosts, Post } from "../../utils/posts.ts";

interface Data extends State {
  posts: Post[];
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ ...ctx.state, posts });
  },
};

export default function Home(props: PageProps) {
    const origin = `${props.url.protocol}//${props.url.host}`;
    const { posts } = props.data;
    return (
        <>
            <Head>
                <title>Fresh App</title>
            </Head>
            <Header active={origin}></Header>
            <div class="p-4 mx-auto max-w-screen-md">
                <ul class="mt-16">
                    { posts.map((post: Post) => <li>{post.title}</li>) }
                </ul>
            </div>
        </>
    );
}
