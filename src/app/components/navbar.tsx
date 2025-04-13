import {NavLinks} from "./nav-links";
import {NavSearch} from "./nav-search";

export const Navbar = ()=>{
    console.log("Navar Rendered");

    return (
        <div>
            <NavLinks />
            <NavSearch />
        </div>
    )
}