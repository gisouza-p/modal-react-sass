import React, { useState } from 'react';
import './css/main.css';
import Modal from './components/Modal/Modal';
import ModalForm from './components/Modal/Form/Form';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModalVisible(true)}>Entre em contato!</button>
      {modalVisible && (
        <Modal onClose={() => setModalVisible(false)}>
          <ModalForm />
        </Modal>
      )}
    </div>
  );
}

export default App;
