import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import ProjectDetail from "./pages/ProjectDetail";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", color: "red" }}>
          <h1>Something went wrong</h1>
          <p>{this.state.error?.toString()}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
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
              <Route
                path="/project/:projectId"
                element={
                  <>
                    <Header />
                    <ProjectDetail />
                  </>
                }
              />
              <Route path="/resume" element={<Resume />} />
            </Routes>
            <Toaster />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
