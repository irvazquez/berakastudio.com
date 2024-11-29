import { Grid2 as Grid } from '@mui/material';

import { MenuData } from '../../data/menuData';
import { LinkButton } from './Menu.styles';

export const Menu = () => {
  return (
    <Grid
      container
      columnGap={2}
      justifyContent={'center'}
      marginTop={2}
      marginBottom={1}
      sx={{ display: { xs: 'none', sm: 'flex' } }}
    >
      {MenuData.map(({text, url}) => (
        <Grid key={`${text}-menu`}>
          <LinkButton color="textPrimary" href={url} underline="none">{text}</LinkButton>
        </Grid>
      ))}
    </Grid>
  );
};
