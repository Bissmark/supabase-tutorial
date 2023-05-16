import { useState } from "react";
import { supabase } from "./supabaseClient";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: props.email,
            password: props.password
        });
        if (error) {
            alert(error.error_description || error.message)
        } else {
            alert('Login successfully');
            navigate('/account');
        }
        setLoading(false);
    };

    return (
        <div>
            <p className="text-3xl font-bold underline text-center">Welcome back, please Login!</p>
            <div className="w-full max-w-xs m-auto">
                <form onSubmit={handleLogin}>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="email"
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
                            placeholder="password"
                            value={props.password}
                            required
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-ring-indigo-600 sm-text-sm sm:leading-6 mb-2"
                            onChange={(e) => props.setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={loading}>
                            {loading ? <span>Loading...</span> : <span>Login</span>}
                        </button>
                    </div>
                </form>    
            </div>
        </div>
    );
};