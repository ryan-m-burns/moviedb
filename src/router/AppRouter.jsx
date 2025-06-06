import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageMovie from '../pages/PageMovie';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GlobalProvider } from '../context/GlobalContext';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<PageHome />} />
            <Route path='/movie/:id' element={<PageMovie />} />
            <Route path='/about' element={<PageAbout />} />
            <Route path='/favourites' element={<PageFavourites />} />
          </Routes>
        </main>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}
