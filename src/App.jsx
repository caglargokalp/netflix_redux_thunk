import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";




const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detay/:id" element={<DetailPage />} />
        <Route path="*" element={ <h1>Yol Bulunamadı</h1> } />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
