import styled from 'styled-components';

export default styled.button`
  display: inline-block;
  padding: 0.6em 1.2em;
  margin: 1em 0.3em 0.3em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  color: #ffffff;
  background-color: var(--primary);
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--hover);
  }
`;
