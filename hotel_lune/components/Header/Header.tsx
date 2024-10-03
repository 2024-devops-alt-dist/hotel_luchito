import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Theme from "../theme";
import DropDownMenu from "../dropDownMenu";
import Brand from "../brand";
import UserActions from "../userActions";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <DropDownMenu />
        <Theme />
      </div>
      <div className="navbar-center">
        <Brand />
      </div>
      <div className="navbar-end">
        <UserActions />
        <SignedOut>
          <SignInButton>
            <button className="btn btn-primary">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
