export interface User {
    id: number;
    email: string;
}

export interface Post {
  id: string;
  created: string;
  modified: string;
  status: string;
  title: string;
  body: string
  user: User;
}

export async function listPosts(): Promise<Post[]> {
    const path = 'https://backend-vx9v.onrender.com/posts/'
    const resp = await fetch(path);
    if (!resp.ok) {
        return [] as Post[];
    }
    const posts = await resp.json() as Post[];
    return posts;
}
