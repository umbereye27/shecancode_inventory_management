// ExampleComponent.jsx

import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const ExampleComponent = () => {
  return <StyledComponent>This is an example component.</StyledComponent>;
};

export default ExampleComponent;
