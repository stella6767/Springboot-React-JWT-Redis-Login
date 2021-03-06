import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  .loginButtonDiv{
    .ant-btn{
    color: #fff;
    height: 30px;
    font-size: 16px;
    border-radius: 50px;
    background-color: #263238;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    padding: 6px 16px;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    word-break: keep-all;
    background: rgb(52,58,64);
    z-index: 1;
    /* span {
        color:black;
    } */
  }



  }

`;

export const HeaderTopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding-left: 10rem;
  padding-right: 10rem;
`;

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLoginSuccessDiv = styled.div`
  display: flex;
  margin-left: 1rem;
`;

export const StyledUserImg = styled.img`
  display: block;
  height: 2rem;
  width: 2rem;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.125s ease-in 0s;
  background-image: url('/images/search.svg');
`;

export const HeaderBottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding-left: 10rem;
  padding-right: 10rem;
`;

export const HeaderLeftDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const HeaderSubDiv = styled(HeaderLeftDiv)`
  width: 14rem;
`;

export const HeaderDateDiv = styled.div`
  background: white;
  height: 2rem;
  width: 6rem;
  border-radius: 4px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-weight: 600;
  color: rgb(73, 80, 87);
  font-size: 0.875rem;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  cursor: pointer;
`;
