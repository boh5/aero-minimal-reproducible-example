import {posts} from "@/.velite";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {posts && posts.map((post) => (
                <div key={post.title} className="flex flex-col max-w-2xl space-y-4">
                    <h2 className="text-3xl font-bold">{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </main>
    );
}
