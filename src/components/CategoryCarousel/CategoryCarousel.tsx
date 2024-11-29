import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CategoryCarouselProps } from './CategoryCarouselInterface';
import { CategoryItem } from './CategoryItem';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const CategoryCarousel = (props: CategoryCarouselProps) => {
  const { items } = props;
  return (
    <Carousel responsive={responsive}>
      {items.map((item) => {
        return (
          <CategoryItem {...item} /> 
        );
      })}
    </Carousel>
  );
}
