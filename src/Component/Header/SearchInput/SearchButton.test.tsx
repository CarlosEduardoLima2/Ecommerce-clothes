import { SearchInput } from '.';
import { renderTheme } from '../../../styles/render-theme';

describe('<SearchInput />', () => {
  it('should match snapshot', () => {
    const {container} = renderTheme(<SearchInput />);
    expect(container).toMatchSnapshot()
  });
});
