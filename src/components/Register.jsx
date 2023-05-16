import { useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Register(props) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const Signup = async (event) => {
        event.preventDefault();

    setLoading(true);
        const { data, error } = await supabase.auth.signUp({
            email: props.email,
            password: props.password,
            username: props.username
        });
        if (error) {
            alert(error.error_description || error.message)
        } else {
            alert('User created successfully');
            navigate('/');
        }
        setLoading(false);
    };

    return (
        <div>
            <p className="text-3xl font-bold underline text-center">Sign up to our great website</p>
            <div className="w-full max-w-xs m-auto mt-5">
                <form onSubmit={Signup}>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={props.email}
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-ring-indigo-600 sm-text-sm sm:leading-6 mb-2"
                            required
                            onChange={(e) => props.setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={props.password}
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-ring-indigo-600 sm-text-sm sm:leading-6 mb-2"
                            required
                            onChange={(e) => props.setPassword(e.target.value)}
                        />
                    </div>
                    {/* <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={props.password}
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-ring-indigo-600 sm-text-sm sm:leading-6 mb-2"
                            required
                            onChange={(e) => props.setPassword(e.target.value)}
                        />
                    </div> */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={props.username}
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-ring-indigo-600 sm-text-sm sm:leading-6 mb-4"
                            required
                            onChange={(e) => props.setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={loading}>
                            {loading ? <span>Loading...</span> : <span>Sign up!</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}