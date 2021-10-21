import React from 'react';
import './Hero.scss';
import TypeIt from 'typeit-react';

const DescType = () => {
  //-->  type it options
  const TypeOptions = {
    speed: 60,
    cursorChar: '|',
    lifeLike: true,
    waitUntilVisible: true,
  };
  return (
    <TypeIt
      options={TypeOptions}
      getBeforeInit={(instance) => {
        return instance
          .type('Maping')
          .pause(600)
          .move(-3)
          .type('p')
          .move(3)
          .type(' interests')
          .break()
          .type('Driven decisions')
          .pause(1400)
          .move(-10)
          .delete(2)
          .type('ing')
          .move(10);
      }}
    />
  );
};

export default DescType;
