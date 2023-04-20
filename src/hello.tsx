import React from 'react';

type MyComponentProps = {
  color: string;
  children: React.ReactNode;
}

function MyComponent(props: MyComponentProps) {
  return (
    <div style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  );
}

export default MyComponent;
