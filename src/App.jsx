import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [github, setGithub] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleJobChange(e) {
    setJob(e.target.value);
  }

  function handleAgeChange(e) {
    setAge(e.target.value);
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function handleStateChange(e) {
    setState(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleGithubChange(e) {
    setGithub(e.target.value);
  }

  async function handleSubmit(e) {
    const formData = {
      name: name,
      email: email,
      job: job,
      age: age,
      city: city,
      state: state,
      phone: phone,
      github: github
    };

    try {
      const response = await axios.post('https://reqres.in/api/users', formData, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      alert('Usuário criado! ID: ' + response.data.id);
    } catch (error) {
      alert('Erro ao enviar os dados.');
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form>
        <input placeholder="Nome" value={name} onChange={handleNameChange} />
        <input placeholder="Email" value={email} onChange={handleEmailChange} />
        <input placeholder="Cargo" value={job} onChange={handleJobChange} />
        <input placeholder="Idade" value={age} onChange={handleAgeChange} />
        <input placeholder="Cidade" value={city} onChange={handleCityChange} />
        <input placeholder="Estado" value={state} onChange={handleStateChange} />
        <input placeholder="Telefone" value={phone} onChange={handlePhoneChange} />
        <input placeholder="GitHub" value={github} onChange={handleGithubChange} />
        <button type="button" onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
}

export default App;
