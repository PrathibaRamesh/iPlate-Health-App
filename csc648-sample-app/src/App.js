// import logo from './logo.svg';
import './About.css';
import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
</div>

{/* <h2 style="text-align:center">Our Team</h2> */}
<div class="row">
  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%" /> */}
      <div class="container">
        <h2>Prathiba Ramesh </h2>
        <p class="title">Team Leader</p>
        <p>Describe about you and your role</p>
        <p>pramesh@sfsu.edu</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%" /> */}
      <div class="container">
        <h2>Tun-Ni Chiang</h2>
        <p class="title">Front-end Lead</p>
        <p>Describe about you and your role</p>
        <p>tchiang3@mail.sfsu.edu </p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%" /> */}
      <div class="container">
        <h2>Aung Myat</h2>
        <p class="title">Scrum Master</p>
        <p>Describe about you and your role</p>
        <p>amyat@mail.sfsu.edu</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%" /> */}
      <div class="container">
        <h2>Christopher Ling</h2>
        <p class="title">Front-end side</p>
        <p>Describe about you and your role</p>
        <p>cling1@mail.sfsu.edu</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%" /> */}
      <div class="container">
        <h2>Myat Kyaw</h2>
        <p class="title">Github Master</p>
        <p>Describe about you and your role</p>
        <p>mkyaw@mail.sfsu.edu</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%" /> */}
      <div class="container">
        <h2>Jingxing Luo</h2>
        <p class="title">Back-end Lead</p>
        <p>Describe about you and your role</p>
        <p>jluo17@mail.sfsu.edu </p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

</div>
    </div>
  );
}

export default App;
