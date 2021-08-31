import styled from "styled-components";

export const Form = styled.form`
  padding: 16px 0;
  width: 95%;
  margin: 0 auto;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  /* &[disabled] {
    opacity: 0.6;
  } */
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  padding: 8px 0;
`;

export const Error = styled.span`
  font-size: 14px;
  background: #fd0161;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  margin-top: 5px;
  display: block;
  width: 100%;
  text-align: center;
  padding-top: 3px;
`;

export const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border-left-color: #09f;
  margin: auto;
  animation: spin 1s ease infinite;
`;
