
import { Button } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Button />', () => {
  it('should render', () => {
    const {container} = renderTheme(<Button to="/">children</Button>);
    expect(container).toMatchSnapshot()
  });
});
