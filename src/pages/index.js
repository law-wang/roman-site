import React, { useRef } from 'react';

import Seo from '../components/seo';
import Popup from '../components/popup';
import '../styles/general.scss';

const Index = () => {
  const studies = useRef(null);
  const likes = useRef(null);
  const becomes = useRef(null);

  const show = (ref) => {
    ref.current.style.display = 'block';
  };

  return (
    <>
      <Seo title="Home" />

      <Popup
        id="studies"
        content="Maybe: Computer Science and Economics, and Political Science"
        top="30%"
        left="30%"
        ref={studies}
      />

      <Popup
        id="likes"
        content="Maybe: the intersection between design and computing, song lyrics, room sprays, Chinese poems, grand strategy games, interior design, Cities Skylines, floor plans"
        top="25%"
        left="25%"
        ref={likes}
      />

      <Popup
        id="become"
        content="Maybe: Someone who draws, writes, and codes"
        top="20%"
        left="20%"
        ref={becomes}
      />

      <div id="text">
        <span id="intro" className="highlight">
          Lawrence Wang <br /> is finding who <br /> he is supposed to be. He
          studies{' '}
          <span aria-hidden="true" onClick={() => show(studies)}>
            this
          </span>
          , <br /> likes{' '}
          <span
            aria-hidden="true"
            onClick={() => (likes.current.style.display = 'block')}
          >
            these
          </span>
          , <br /> and wants to <br /> become <br />{' '}
          <span
            aria-hidden="true"
            onClick={() => (becomes.current.style.display = 'block')}
          >
            that
          </span>
          .
        </span>

        <a
          className="highlight"
          href="https://www.instagram.com/rencewang/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram&#x2197;&#xFE0E;
        </a>

        <a
          className="highlight"
          href="https://www.linkedin.com/in/lawrence-c-w/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin&#x2197;&#xFE0E;
        </a>
      </div>
    </>
  );
};

export default Index;
