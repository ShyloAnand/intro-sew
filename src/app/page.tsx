import { NavigationMenuDemo } from "@/components/NavBar/NavBar";
import ShopApp from "@/components/Profile/Profile";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="py-10 px-16 text-3xl bg-white shadow-lg">
        <NavigationMenuDemo cart={[]} />
      </div>

      <ShopApp />
    </div>
  );
}
