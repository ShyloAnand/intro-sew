import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Image from "next/image";

type Dress = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type NavigationMenuDemoProps = {
  cart: Dress[]; // ✅ This is required
};

export function NavigationMenuDemo({ cart }: NavigationMenuDemoProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/shop">Shop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Cart dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cart ({cart.length})</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[300px] p-2 space-y-2">
              {cart.length === 0 ? (
                <li className="text-sm text-muted-foreground px-2">
                  Cart is empty.
                </li>
              ) : (
                cart.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        ₹{item.price}
                      </p>
                    </div>
                  </li>
                ))
              )}
              <li className="pt-2">
                <Link
                  href="/cart"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View Full Cart →
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/profile">Profile</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
