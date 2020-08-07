import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import './style.css';
import TextArea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm(){
  const [scheduleItems, setScheduleItems] = useState ([
    { week_day: 0, from: '', to: '' }
  ]);

  function addScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);

    scheduleItems.push()
  }
  return(
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrível que você quer dar aulas."
      description="O primeiro passo é preencher este formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
            name="subject" 
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Sociologia', label: 'Sociologia' },
              { value: 'Eucação Física', label: 'Educação Física' },
            ]}
           />
          <Input name="cost" label="Custo da hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
              Horários disponíveis
            <button type="button" onClick={addScheduleItem}>
              + Novo horário
            </button>
          </legend>
          
          {scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
            <Select 
              name="week_day" 
              label="Dia da Semana"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
           />
           <Input name="from" label="Das" type="time" />
           <Input name="to" label="Até" type="time" />
          </div>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;