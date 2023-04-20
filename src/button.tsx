import { useState } from 'react';

interface ButtonProps {
  children: string;
}

export function Button(props: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button className="btn" onClick={handleClick}>
      <span style={{ color: isClicked ? 'red' : 'black' }}>{props.children}</span>
    </button>
  );
}
