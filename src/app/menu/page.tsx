import Menu from "@/screens/menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next",
};

export default function MenuPage() {
  return <Menu />;
}
