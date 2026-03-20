
import './App.css'
import {Show,
  SignInButton,
  SignOutButton,
  UserButton } from '@clerk/react'
//how to send the data info from the clerk to the database as they are two different companies ,
//So there are other providers like ingest so ,
//clerk will send an event called "webhook" and clerk will send the user info to ingest
//and ingest will do background job which is a fun and it will connect to mongodb and save info in db
//chat and vdo messages are provided by stream
function App() {

  return (
    <>  
     <h1>Welcome to the app</h1>
     <Show when="signed-out">

      <SignInButton mode="modal">
        <button>Login</button>
      </SignInButton>
     </Show>

     <Show when="signed-in">
      <SignOutButton/>
     </Show>

     <UserButton/>
    </>
  )
}

export default App
