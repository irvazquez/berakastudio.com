import { Box } from '@mui/material';
import { Menu } from '../components/Menu/Menu';
import { TopBar } from '../components/TopBar/TopBar';
import { TopBarData } from '../data/topBarData';
import SearchForm from '../components/SearchForm/SearchForm';
import { OfferSlider } from '../components/OfferSlider';
import { CategoryCarousel } from '../components/CategoryCarousel';

export const HomePage = () => {
  return (
    <Box>
      <TopBar key="topBar" elements={TopBarData} />
      <SearchForm />
      <Menu />
      <OfferSlider />
      <CategoryCarousel items={[]} />
    </Box>
  );
}
