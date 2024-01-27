import Post from "@/screens/post";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Post",
};

export default function PostPage({params}: {params: { category: string; postId: string }}) {
    return <Post params={params} />
}