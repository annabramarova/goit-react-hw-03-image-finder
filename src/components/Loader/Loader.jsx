
import { Preloader, Loader, Circle, Face,} from './Loader.styled';

export const Spinner = () => (
 <Preloader>
  <Loader>
    <Face>
      <Circle />
    </Face>
    <Face>
      <Circle />
    </Face>
  </Loader>
</Preloader>
);
