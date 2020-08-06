import React from 'react';

import './styles.css';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/62774392?s=460&u=5e4000d42d2fc1bdbd3e217911418d2a5ac87602&v=4" alt="Nathan"/>
            <div>
              <strong>Nathan de Andrade</strong>
              <span>Matemática</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores fórmulas de matemática avançada.
            <br/>
            Apaixonado por expandir as mentes dos alunos com diversas maneiras de se fazer uma fórmula bem explicada.
          </p>

          <footer>
            <p>Preço/hora
              <strong>R$ 30,00</strong>
            </p>
            <button type="button">
              <img src={whatsAppIcon} alt="WhatsApp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;