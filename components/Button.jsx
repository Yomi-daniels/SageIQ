import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => {
  return (
    <StyledWrapper>
      <button className="button">
        <div className="blob1" />
        <div className="blob2" />
        <div className="inner">{children}</div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    font-size: 1rem; /* smaller text */
    border-radius: 12px;
    border: none;
    padding: 1.5px;
    background: radial-gradient(circle 60px at 80% -10%, #ffffff, #181b1b);
    position: relative;
  }

  .button::after {
    content: "";
    position: absolute;
    width: 55%;
    height: 8%;
    border-radius: 100px;
    top: 0;
    right: 0;
    box-shadow: 0 0 12px #ffffff38;
    z-index: -1;
  }

  .blob1 {
    position: absolute;
    width: 50px; /* reduced */
    height: 100%;
    border-radius: 12px;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle 40px at 0% 100%,
      #3fe9ff,
      #0000ff80,
      transparent
    );
    box-shadow: -8px 8px 20px #0051ff2d;
  }

  .inner {
    padding: 8px 16px; /* reduced */
    border-radius: 10px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 60px at 80% -50%, #777777, #0f1111);
    font-size: 0.9rem; /* smaller text */
  }

  .inner::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
    background: radial-gradient(
      circle 40px at 0% 100%,
      #00e1ff1a,
      #0000ff11,
      transparent
    );
    position: absolute;
  }
`;

export default Button;
