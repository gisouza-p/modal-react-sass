import React from 'react';

const ModalForm = () => {
  return (
    <div className="modal-form__container">
      <h1 className="modal-form__title">Formulário de Contato</h1>
      <form className="modal-form">
        <hr />
        <div className="modal-form__group">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="modal-form__group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="modal-form__group">
          <label htmlFor="message"> Mensagem </label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ModalForm;
