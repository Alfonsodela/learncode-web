import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute, { AuthContextProvider } from './context/auth.context'
import Authenticate from './pages/Authenticate'
import StyleGuide from './pages/StyleGuide';
import { Layout } from './ui/Layout';
import { Error} from './ui/Error'
import { Snippets } from './pages/Snippets';
import SnippetFormPage from './pages/SnippetFormPage';

function App () {
  return (
    <div className="App">
      <Layout>
        <AuthContextProvider>
          <Router>
            <Routes>
              <Route index element={<Authenticate/>} />

              <Route path="edit" element={<Navigate to="/"/>}>
                <Route
                  path="snippet"
                  element={
                    <ProtectedRoute>
                      <SnippetFormPage/>
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
                  <Snippets/>
                }
              />
              <Route path="styleguide" element={<StyleGuide/>}/>
              <Route path="*" element={<Error size='xl'>404 | No encontrado</Error>} />
            </Routes>
          </Router>
        </AuthContextProvider>
      </Layout>
    </div>
  );
} 

export default App;
