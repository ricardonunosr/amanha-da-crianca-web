import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html,body,#root{
    height:100%
  }

  *,button,input{
    border:0;
    outline:0;
    font-family:'Roboto',sans-serif;
  }
  :root {
    --primary: #171717;
    --hover:#525252 ;
    --footer: #313131;
    --footer-text:#9A9A9A;
  }
`;
