import styled from 'styled-components';

export const Container = styled.div`
  border: 2px;
  width: 100%;
  margin: auto;
  display: flex;
  height: 80%;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 40px;
  margin-top: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 6px 12px;
  font-size: 24px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 1em 0.3em 0.3em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  color: #ffffff;
  background-color: #ccc;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    background-color: #4095c6;
  }
`;
