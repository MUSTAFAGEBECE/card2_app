import Header from './components/Header';
import SpecialButton from './components/SpecialButton';
import { users } from './constants';
import Card from './components/Card';
import { useState } from 'react';



function App() {
  const kayıtlıKullanıcılar = 14;

  const isAdmin = true;

  
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <div className="App">
      <Header
        users={kayıtlıKullanıcılar}
        setIsLogedIn={setIsLogedIn}
        isLogedIn={isLogedIn}
        isAdmin={isAdmin}
      />
      <SpecialButton
        text="Onayla"
        renk="yesil"
        islev={() => {
          alert('Onaylandı');
        }}
      />
      <SpecialButton
        text="Gönder"
        renk="yesil"
        islev={() => {
          alert('Gönderildi');
        }}
      />
      <SpecialButton text="Tamam" renk="sari" />
      <SpecialButton text="Çıkış" renk="kirmizi" />

     
      <div className="cards">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;

