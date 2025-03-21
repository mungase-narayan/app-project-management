import useAuth from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { NavLinkType } from "@/types";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  links: NavLinkType[];
}

const NavLinks = ({ links }: NavLinksProps) => {
  const { isAuth } = useAuth();
  if (!isAuth) return null;

  return (
    <div className="items-center justify-center space-x-4 hidden md:flex">
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          className={({ isActive }) =>
            cn(
              "hover:text-primary transition-all space-x-1 flex items-center text-muted-foreground justify-center",
              isActive && "text-primary"
            )
          }
        >
          <span className="text-sm">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
