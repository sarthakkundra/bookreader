import { css } from 'lit-element';

export default css`
  .ia-button {
    min-height: 3rem;
    border: none;
    outline: none;
    cursor: pointer;
    color: var(--primaryTextColor);
    line-height: normal;
    border-radius: .4rem;
    text-align: center;
    vertical-align: middle;
    font-size: 1.4rem;
    display: inline-block;
    padding: .6rem 1.2rem;
    border: 1px solid transparent;

    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .ia-button.link {
    min-height: unset;
  }

  .ia-button:disabled,
  .ia-button.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .ia-button.transparent {
    background-color: transparent;
  }
  
  .ia-button.slim {
    padding: 0;
  }

  .ia-button.primary {
    background-color: var(--primaryCTAFill);
    border-color: var(--primaryCTABorder);
  }

  .ia-button.cancel {
    background-color: var(--primaryErrorCTAFill);
    border-color: var(--primaryErrorCTABorder);
  }
`;
