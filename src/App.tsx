import React from 'react';
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";
import Geo from "./hooks/Geo";

export default function App() {
    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)
  return (
      <div>
          <Geo/>
        <h1>Это основная страница</h1>
          <a>Чтобы открыть каталог нажмите на кнопку!</a>
          <button className="open-btn" onClick={() => setModal(true)}>Библиотека</button>
          <Modal
              visible={isModal}
              onClose={onClose}>
              <div>
                  <p>Перечень каталогов:</p>
                  <Link to="/Dino"><button>Динозавры</button></Link>
                  <Link to="/Plasma"><button>Плазмозавры</button></Link>
              </div>
          </Modal>
      </div>
  );
}