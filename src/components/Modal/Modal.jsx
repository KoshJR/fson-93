import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.handleCloseModal();
    }
  };

  handleKeyPress = event => {
    if (event.code === 'Escape') this.props.handleCloseModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
    window.removeEventListener('keydown', this.handleKeyPress);
  }
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }
  render() {
    return (
      <div className={css.overlay} onClick={this.handleOverlayClick}>
        <div className={css.modal}>
          <button
            onClick={this.props.handleCloseModal}
            className={css.closeModalBtn}
          >
            &times;
          </button>
          <h2>Profile Details</h2>
          <p>Profile Name: {this.props.modalData.name}</p>
          <p>Profile Age: {this.props.modalData.age}</p>
          <p>Status: {this.props.modalData.isFavorite ? 'Top' : 'Looser'}</p>
        </div>
      </div>
    );
  }
}

/* 
componentDidMount - метод життєвого циклку який викликається один раз після того, як компонента відрендерилась.
використовується: -
- коли надсилаються мережеві запити,
- коли треба зчитати дані з локального сховища,
- встановлюються глобальні слухачі подій (window,addEventListener)
- встановлюються таймери (setTimeout, setInterval)

componentWillUnmount - - метод життєвого циклку який викликається один раз перед тим, як компонента видалиться з дом-дерева.
використовується: -
- коли треба відхиляти мережеві запити,
- коли треба знімати глобальні слухачі подій (window,addEventListener)
- коли треба очистити таймери (setTimeout, setInterval)

componentDidUpdate - - метод життєвого циклку який викликається кожен раз після того як компонента оновилася(змінилися пропси або стан).
використовується: -
- коли надсилаються мережеві запити,
- оновлюються (синхронізуються стейт з локальним сховищем)
- відслідковується яка частина стану або пропсів змінилася (prevState.isModalOpen !== this.state.isModalOpen)

*/
