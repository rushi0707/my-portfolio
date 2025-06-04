import React from 'react';
import { ReactComponent as MySVG } from '../assets/logo.svg';

// Configure JSX transformation
const oldReactCreateElement = React.createElement;
React.createElement = function createElement(...args) {
  const [component, props, ...children] = args;
  if (typeof component === 'string' && component.startsWith('svg')) {
    return oldReactCreateElement(component, { ...props, throwIfNamespace: false }, ...children);
  }
  return oldReactCreateElement(...args);
};

function MyComponent() {
  return (
    <div>
      {/* Render your SVG component */}
      <MySVG />
    </div>
  );
}

export default MyComponent;
