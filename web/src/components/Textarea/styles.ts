import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
      font-size: 1.4rem;
      & + label {
        margin-top: auto;
        font-size: 1rem;
      }
    }
  }
  textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-white);
    outline: 0;
    padding: 1.2rem 1.6rem;
    resize: vertical;
    font: 1.6rem Archivo;
  }
  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }
`;