import styled from 'styled-components';

export const Label = styled.label`
  color: ${p => p.theme.colors.blue};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-transform: uppercase;
`;

export const Field = styled.input`
  margin-left: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.none};
  border-bottom: ${p => p.theme.borders.slim} ${p => p.theme.colors.border};

  :hover {
    border-bottom: ${p => p.theme.borders.slim} ${p => p.theme.colors.blue};
  }
`;
