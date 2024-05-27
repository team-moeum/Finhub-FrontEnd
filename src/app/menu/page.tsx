import dynamic from "next/dynamic";

const MenuScreen = dynamic(() => import('./_component/MenuScreen'), {
  ssr: false,
});

export default function MenuPage() {
  return (
    <MenuScreen />
  );
}
