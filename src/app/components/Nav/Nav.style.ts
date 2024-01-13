import styled from "@emotion/styled";

export const container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    padding: 0px;
    margin: 0px;
  }

  li {
    list-style-type: none;
    float: left;
  }

  ul li {
    margin-right: 10px;
  }

  ul li a {
    font-size: 15px;
    display: block;
    padding: 10px 20px;
    transition: all 0.3s;
    border-radius: 8px;
  }

  ul li a:active {
    background: #000;
  }

  ul li a:hover {
    background: #eee;
  }

`;
