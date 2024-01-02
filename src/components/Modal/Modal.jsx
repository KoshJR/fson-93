import React, { Component, useEffect } from 'react';
import css from './Modal.module.css';
import { useState } from 'react';

export const Modal = ({ handleCloseModal, modalData }) => {
  const [clickCounter, setClickCounter] = useState(0);
  const [tabPanel, setTabPanel] = useState('users');

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  //хук useEffect (componentDidMount and componentWillUnmount)
  useEffect(() => {
    //componentDidMount
    const handleKeyPress = event => {
      if (event.code === 'Escape') handleCloseModal();
    };

    window.addEventListener('keydown', handleKeyPress);

    document.body.style.overflow = 'hidden';

    return () => {
      // componentWillUnmount()
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleCloseModal]);

  // useEffect(() => {
  //   //componentDidUpdate
  //   console.log('current tabpanel is', tabPanel);
  // }, [tabPanel]);

  const handleCounterClick = () => {
    setClickCounter(prevState => prevState + 1);
  };
  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <button onClick={handleCloseModal} className={css.closeModalBtn}>
          &times;
        </button>
        <br />
        <br />
        <p>Click counter: {clickCounter}</p>
        <button onClick={handleCounterClick}>Change counter</button>
        <br />
        <br />
        <button onClick={() => setTabPanel('users')}>Users</button>
        <button onClick={() => setTabPanel('groups')}>Groups</button>
        <button onClick={() => setTabPanel('comments')}>Comments</button>
        <br />
        {tabPanel === 'users' && (
          <>
            <h2>Profile Details</h2>
            <p>Profile Name: {modalData.name}</p>
            <p>Profile Age: {modalData.age}</p>
            <p>Status: {modalData.isFavorite ? 'Top' : 'Looser'}</p>
          </>
        )}
        {tabPanel === 'groups' && <p>Here goes some groups</p>}
        {tabPanel === 'comments' && <p>Here goes some comments</p>}
      </div>
    </div>
  );
};

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

// export class Modal extends Component {
//   handleOverlayClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.handleCloseModal();
//     }
//   };

//   handleKeyPress = event => {
//     if (event.code === 'Escape') this.props.handleCloseModal();
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyPress);

//     document.body.style.overflow = 'hidden';
//   }

//   componentWillUnmount() {
//     document.body.style.overflow = 'auto';
//     window.removeEventListener('keydown', this.handleKeyPress);
//   }
//   render() {
//     return (
//       <div className={css.overlay} onClick={this.handleOverlayClick}>
//         <div className={css.modal}>
//           <button
//             onClick={this.props.handleCloseModal}
//             className={css.closeModalBtn}
//           >
//             &times;
//           </button>
//           <h2>Profile Details</h2>
//           <p>Profile Name: {this.props.modalData.name}</p>
//           <p>Profile Age: {this.props.modalData.age}</p>
//           <p>Status: {this.props.modalData.isFavorite ? 'Top' : 'Looser'}</p>
//         </div>
//       </div>
//     );
//   }
// }

// /*
