import styled, {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`


  :root {
    /* Font Families */
    --brand-font-family: 'Redressed', cursive;
    --text-font-family: 'Shippori Mincho', serif;


  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--text-font-family);
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  }

  body {
    overflow-x: hidden;
    position: relative;
  }
`

export const FormButton = styled.button`
  padding: 10px;
  background: rgba(100, 159, 237, 0.3);
  color: #000;
  font-weight: 600;
  border-top: 2px solid cornflowerblue;
  border-bottom: 2px solid cornflowerblue;
  letter-spacing: 2px;
  margin-top: 20px;
  font-size: 20px;
  border-radius: 10px;
  border-left: none;
  border-right: none;
  width: 60%;
  transition: 0.4s;


  &:hover {
    width: 100%;
    background: cornflowerblue;
    color: #fff;
    font-family: var(--brand-font-family);

  }
`

export const FormError = styled.div`
  text-align: center;
  color: darkred;
  font-weight: 500;
  font-size: 16px;
  margin: 5px 0;
  background: rgba(139, 0, 0, 0.2);
  display: ${props => props.error ? "block" : "none"};
  border-radius: 5px;
  //padding: 5px;

`
// export const Wrapper = styled.section`
//   width: 100%;
//   min-height: 100vh;
// `
// export const Show = styled.h5`
//   font-family: var(--brand-font-family);
//   text-align: center;
//   background: rgba(100, 159, 237, 0.7);
//   width: 20%;
//   border-radius: 5px;
//   padding: 10px;
//   font-size: 20px;
// `
// export const CountButton = styled(FormButton)`
//   width: 30%;
//   background: rgba(0, 100, 0, 0.5);

// `
export const CartButton = styled.button`
  padding: 5px 10px;
  letter-spacing: 3px;
  font-family: var(--text-font-family);
  font-weight: 600;
  color: #7757c2;
  border-radius: 5px;
  border: none;
  outline: none;
  background: rgba(119, 87, 194, 0.4);
  width: 100%;
  margin: 0 auto;
  transition:  0.4s;

  &:hover {
    background: #7757c2;
    color: #ffffff;
  }

`
