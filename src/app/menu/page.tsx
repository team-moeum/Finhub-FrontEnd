import Menu from "@/screens/menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
};

export default async function MenuPage() {
  return <Menu />;
}
