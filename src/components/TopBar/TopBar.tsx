import {
  Link,
  Grid2 as Grid,
  Typography,
} from '@mui/material';

type TopBarProps = {
  elements: TopBarItem[],
};

interface TopBarItem {
  text: string,
  url?: string,
};

export const TopBar = (props: TopBarProps) => {
  const { elements } = props;
  return (
    <section className="bg-gray-light">
      <Grid container columns={2} columnSpacing={2}>
        {elements.map(({ text, url = '' }) => (
          url !== '' ? (
            <Typography key={text} variant="caption">
              <Link href={url}>{text}</Link>
            </Typography>
          ) : (
            <Typography key={text.replace(' ','-')} variant="caption">{text}</Typography>
          )
        ))}
      </Grid>
    </section>
  );
};
