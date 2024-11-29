import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  ArrowOfferBackSlide,
  ArrowOfferForwardSlide,
  CaroucelOfferSlide,
  CaroucelOfferWrapper,
  ItemSlide,
  OfferButtonGroup,
} from './';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const { carouselState: { currentSlide, totalItems } } = rest;
  return (
    <OfferButtonGroup>
      <ArrowOfferBackSlide
        disabled={currentSlide === 0 ? true : false}
        onClick={() => previous()}
        size="small"
        edge="start"
      >
        <ChevronLeftIcon fontSize="small" />
      </ArrowOfferBackSlide>
      <ArrowOfferForwardSlide
        disabled={currentSlide === totalItems - 1 ? true : false}
        onClick={() => next()}
        size="small"
        edge="end"
      >
        <ChevronRightIcon fontSize="small" />
      </ArrowOfferForwardSlide>
    </OfferButtonGroup>
  );
}

export const OfferSlider = () => {
  return (
    <CaroucelOfferWrapper>
      <CaroucelOfferSlide
        transitionDuration={500}
        responsive={responsive}
        swipeable={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        <ItemSlide>Item 1</ItemSlide>
        <ItemSlide>Item 2</ItemSlide>
        <ItemSlide>Item 3</ItemSlide>
        <ItemSlide>Item 4</ItemSlide>
      </CaroucelOfferSlide>
    </CaroucelOfferWrapper>
  );
};

