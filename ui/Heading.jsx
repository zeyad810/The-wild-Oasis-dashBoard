import styled from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    `
    font-size: 3rem;
    font-weight: 600;
    
  `}

  ${(props) =>
    props.as === "h2" &&
    `
  font-size: 2rem;
    font-weight: 600;
    
`}
${(props) =>
    props.as === "h3" &&
    `
    font-size: 2rem;
    font-weight: 500;
    
  `}
${(props) =>
    props.as === "h4" &&
    `
    font-size: 3rem;
    font-weight: 500;
    text-align:center;
  `}
    line-height:1.6
`;

export default Heading;
