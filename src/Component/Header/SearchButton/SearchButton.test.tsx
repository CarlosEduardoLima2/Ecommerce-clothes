import { SearchButton } from '.';
import { renderTheme } from '../../../styles/render-theme';

describe('<SearchButton />', () => {
  it('should mach snapshot', () => {
    const handleClick = jest.fn()
    const {container} = renderTheme(<SearchButton handleClick={handleClick}/>);
    expect(container).toMatchSnapshot()
  });
});
