import { useState } from "react";
import { useEffect } from "react";
import CheckboxInput from "./components/Checkboxinput";
import DateInput from "./components/Dateinput";
import Header from "./components/Header";
import Main from "./components/Main";
import OnlineOfline from "./components/OnlineOfline";
import Textinput from "./components/Textinput";
import Timer from "./components/Timer";
import { getAgeFrom } from "./helpers/dateHelpers";
import { getNewId } from './services/idService';

export default function App() {
  //const state = useState('Thiago');
  //const name = state[0];
  //const setName = state[1];
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    //online
    //offline

    function toggleOnline() {
      setIsOnline(true);
    }

    function toggleOffLine() {
      setIsOnline(false);
    }

    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOffLine);

    return() => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOffLine);
    };
  }, []);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }

  return (
    <>
      <Header>React-hello</Header>
      
      <Main>
        <OnlineOfline isOnline={isOnline} />

        {showTimer && (
          <div className="text-right mt-1">
          <Timer />
        </div>
        )}

        <OnlineOfline />
     
        <CheckboxInput
          labelDescription="Mostrar Cronômetro" 
          onCheckboxChange={toggleShowTimer}
        />

        <Textinput 
          //id="textInput"
          id={getNewId()}
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />

        <DateInput
          //id="dateInput"
          id={getNewId()}
          labelDescription="Digite sua data de nascimento"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        
        <p>
          O seu nome é {name}, com {name.length} caracteres, e você possui   {getAgeFrom(birthDate)} anos.
        </p>
      </Main>

    </>
  );
}

