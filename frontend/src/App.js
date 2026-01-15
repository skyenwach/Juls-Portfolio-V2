import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
