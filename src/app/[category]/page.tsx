import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category",
};

export default function CategoryPage({ params }: { params: { category: string } }) {
    return <div>Category Page - not use</div>;
}