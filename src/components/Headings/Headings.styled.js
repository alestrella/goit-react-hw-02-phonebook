import styled from 'styled-components';

export const MainHeading = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-transform: capitalize;
  color: ${p => p.theme.colors.white};
  text-align: center;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Heading = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-transform: capitalize;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
