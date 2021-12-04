import { styled } from "~/theme";

export const StyledWrapper = styled.header`
  height: ${({ theme }) => theme.rem(80)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
`;

export const StyledLayout = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
