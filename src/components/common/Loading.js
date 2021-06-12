import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const LoadingWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  ${({ theme }) => theme.fonts.loading}
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
