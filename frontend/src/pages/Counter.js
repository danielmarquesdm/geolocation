import React, { Component } from 'react';

import './Counter.css';

class Counter extends Component {
  render() {
    return (
      <div className="counter-container">
        <div style={{ background: '#74BC3C' }} id="cards">
          <h1>Acesso</h1>
          <div>
            <p>20</p>
          </div>
        </div>
        <div style={{ background: '#BA2444' }} id="cards">
          <h1>Permanência</h1>
          <div>
            <p>18</p>
          </div>
        </div>
        <div style={{ background: '#8E8E8E' }} id="cards">
          <h1>Saída</h1>
          <div>
            <p>2</p>
          </div>
        </div>
        <div style={{ background: '#329FD6' }} id="cards">
          <h1>
            Visitas <br /> programadas
          </h1>
          <div>
            <p>4</p>
          </div>
        </div>
        <div style={{ background: '#CEC22C' }} id="cards">
          <h1>
            Aguardando <br /> autorização
          </h1>
          <div>
            <p>5</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
