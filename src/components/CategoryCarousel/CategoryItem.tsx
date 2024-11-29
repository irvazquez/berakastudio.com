import { Card, CardActionArea, CardMedia, Link } from '@mui/material'
import { CategoryItemProps } from './CategoryCarouselInterface';

export const CategoryItem = (props: CategoryItemProps) => {
  const { src, url } = props;
  return (
    <Card>
      <CardActionArea>
        <Link href={url}>
          <CardMedia src={src} />
        </Link>
      </CardActionArea>
    </Card>
  );
}
