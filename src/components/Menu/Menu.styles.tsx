import { Link, styled } from '@mui/material';

export const LinkButton = styled(Link)`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    left: 0;
    bottom: 0;
    width: 0;
    background-color: black;
    transition: .2s;
  }

  &:hover:after {
    text-decoration: underline;
    width: 100%;
  }
`;
