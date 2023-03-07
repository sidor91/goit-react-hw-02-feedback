import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
display: flex;
justify-content: center;
`;

export const FeedbackButton = styled.button`
  &:not(:last-child) {
    margin-right: 10px;
  }

  &:active {
    background-color: blue;
    color: white;
  }
`;
