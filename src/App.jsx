import { useState, useEffect } from "react"
import { supabase } from "./components/supabaseClient"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import Account from "./components/Account";
import Home from "./components/Home";
import Auth from "./components/Auth";
import './App.css'
import Navbar from "./components/Navbar";

function App() {
    const [session, setSession] = useState(null);

  useEffect(() => {
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //   setSession(session);
    // })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      console.log(session);
    })
  }, [])

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Navbar session={session} />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/register" element={ <Register /> } />
          <Route path="/account" element={!session ? (
            <Auth /> ) : (
              <Account key={session.user.id} session={session} />
            )} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
