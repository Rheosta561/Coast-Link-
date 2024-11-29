import React from 'react';
import { useInView } from 'react-intersection-observer';

function Avatar(props) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animate only once when it comes into view
    threshold: 0.1,    // Trigger animation when 10% of the component is visible
  });

  return (
    <div
      ref={ref}
      className={`w-3/4 p-4 flex flex-col items-center transition-transform duration-700 ease-out ${
        inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="h-72 w-96 bg-zinc-100 rounded-lg">
        <img src={props.source} className="h-full w-full" alt="" />
      </div>
      <div className="text-5xl text-center">{props.title}</div>
      <div className="text-sm text-gray-700 text-center md:w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, delectus!
      </div>
      <div className="text-xs text-gray-500 text-center md:w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quam facere? Tempora dolorem earum aspernatur quibusdam temporibus neque nemo laborum?
      </div>
    </div>
  );
}

export default Avatar;
