import { LogoLink, AuthButtons, NavLinks, ModeToggle } from "@/components";
import { NAV_LINKS } from "@/constants";
import UserAvatar from "./user-avatar";
import MobileHeader from "./mobile-header";

const SiteHeader = () => {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 sm:px-8 flex h-14 items-center mx-auto space-x-2 justify-between">
        <div className="flex items-center justify-center space-x-4 sm:space-x-8">
          <LogoLink />
          <NavLinks links={NAV_LINKS} />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <AuthButtons />
          <div className="hidden md:block">
            <UserAvatar />
          </div>
          <ModeToggle />
          <MobileHeader />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
