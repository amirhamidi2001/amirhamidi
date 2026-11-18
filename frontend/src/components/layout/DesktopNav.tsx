import { NavLink } from "./NavLink";
import { navigation } from "@/data/navigation";
import { uiText } from "@/data/ui-text";

export function DesktopNav() {
  return (
    <nav aria-label={uiText.mainNav} className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {navigation.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href} className="py-2">
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
