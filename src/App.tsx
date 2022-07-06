import styled from "@emotion/styled";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute, { AuthContextProvider } from "./context/auth.context";
import Authenticate from "./pages/Authenticate";
import { Layout } from "./ui/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <AuthContextProvider>
          {/* TODO: Insert Header here */}
          <Router>
            <Routes>
              <Route index element={<Authenticate/>} />

              <Route path="edit" element={<Navigate to="/"/>}>
                <Route
                  path="snippet"
                  element={
                    <ProtectedRoute>
                      <h1>Edit Snippet</h1>
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="profile"
                  element={
                    <ProtectedRoute>
                      <h1>Edit Profile</h1>
                    </ProtectedRoute>
                  }
                />
              </Route>

              <Route
                path="snippets"
                element={
                  <ProtectedRoute>
                    <h1>Snippets</h1>
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Router>
        </AuthContextProvider>
      </Layout>
    </div>
  );
}

export default App;
