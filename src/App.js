import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListagemMeme from "./pages/ListagemMeme";

function App() {
  return (
    <div className="bg-warning">

      <BrowserRouter>
        
        <Menu />

       <Container>   
        <Routes>
          <Route path='/meme' element={<ListagemMeme />} />
          <Route path='/' element={<ListagemMeme />} />
        </Routes>
       </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
