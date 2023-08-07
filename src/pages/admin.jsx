import React from 'react';

export default function Admin() {
  const heightScreen = window.innerHeight;

  return (
    <div className="App">
      <main style={{ height: heightScreen, justifyContent: 'center' }}>
        <form onSubmit={(event) => {event.preventDefault()}}>
          <input type="password" name="password" id="password" placeholder="Senha de acesso" />
        </form>
      </main>
    </div>
  )
}
