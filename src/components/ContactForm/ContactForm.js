import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 50%;
  color: ${p => p.theme.colors.textSecondary};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const Field = styled.input`
  margin-left: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.borders.none};
  border-bottom: ${p => p.theme.borders.slim} ${p => p.theme.colors.border};

  :hover {
    border-bottom: ${p => p.theme.borders.slim} ${p => p.theme.colors.blue};
  }
`;

export const Button = styled.button`
  width: 200px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.sx};
  text-transform: uppercase;

  :hover {
    box-shadow: ${p => p.theme.shadows.card};
  }
`;
