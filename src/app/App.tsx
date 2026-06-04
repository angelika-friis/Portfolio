import { useEffect } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router';
import { useLanguage } from './i18n/useLanguage';
import { isSupportedLanguage } from './i18n/translations';
import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';

function LanguagePage() {
  const { language: routeLanguage } = useParams();
  const { language, setLanguage } = useLanguage();
  const selectedLanguage = isSupportedLanguage(routeLanguage)
    ? routeLanguage
    : null;

  useEffect(() => {
    if (selectedLanguage && selectedLanguage !== language) {
      setLanguage(selectedLanguage);
    }
  }, [language, selectedLanguage, setLanguage]);

  if (!selectedLanguage) {
    return <Navigate to="/sv" replace />;
  }

  return <HomePage />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/sv" replace />} />
          <Route path=":language" element={<LanguagePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
