import { Box, IconButton, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import theme from '../../theme';

export const ItemSlide = styled(Box)`
  width: 100%;
  background-color: ${theme.palette.common.black};
  color: ${theme.palette.common.white};
  text-align: center;
  padding: 5px 0;
`;

export const ArrowOfferSlide = styled(IconButton)`
  padding: 7px 10px;
  top: 0;
  position: absolute;
  color: ${theme.palette.common.white};
`;

export const ArrowOfferForwardSlide = styled(ArrowOfferSlide)`
  right: 10px;
  color: ${theme.palette.common.white};
`;

export const ArrowOfferBackSlide = styled(ArrowOfferSlide)`
  left: 10px;
  color: ${theme.palette.common.white};
`;

export const CaroucelOfferSlide = styled(Carousel)`
  position: relative;
`;

export const CaroucelOfferWrapper = styled(Box)`
  position: relative;
`;

export const OfferButtonGroup = styled(Box)`
  position: absolute;
  top: 0;
  width: 100%;
`;
