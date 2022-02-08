import styled from "@emotion/styled";

export const FriendItemLi = styled.li`
  list-style-type: none;
  border: 1px solid black;
  padding: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.8);
`;

export const IsOnLineSpan = styled.span`
  display: flex;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.5);
  width: 10px;
  height: 10px;
  background-color: ${(friends) => {
    return friends.isOnline ? "green" : "red";
  }};
`;

export const FriendNameP = styled.p`
  display: flex;
  justify-content: center;
`;
