import styled from "styled-components";

export const Styled = styled.div`
  &.accounts {
    margin: 0 auto;
    max-width: 80%;
    padding: 2% 0;
    .hook {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .hook .actions {
      display: flex;
    }
    .hook .actions .action {
      display: flex;
      align-items: center;
      padding: 1% 2%;
      background: #1e1f23;
      min-width: 180px;
      :first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        position: relative;
        ::after {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          background: rgba(255, 255, 255, 0.5);
          content: "";
          height: 60%;
        }
      }
      :last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    .hook .actions .action .title {
      padding-left: 10%;
      font-weight: bold;
    }
  }
`;
