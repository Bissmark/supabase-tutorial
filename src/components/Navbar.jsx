import { Link } from "react-router-dom";
import { supabase } from "./supabaseClient";

const Navbar = ({ session }) => {

    // console.log(session)
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <ul>
                    <li>
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white mr-4" to="/">Home</Link>
                    </li>
                    {session ? (
                        <div>
                            <li>
                                <Link to="/account">Profile</Link>
                            </li>
                            <li>
                                <Link to="/login" onClick={() => supabase.auth.signOut()}>Logout</Link>
                            </li>
                        </div>
                    ) : (
                        <div>
                            <li>
                                <Link className="block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white mr-4" to="/account" >Login</Link>
                            </li>
                            <li>
                                <Link className="block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white mr-4" to="/register" >Register</Link>
                            </li>
                        </div>

                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;