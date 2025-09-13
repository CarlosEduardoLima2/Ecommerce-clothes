import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GridContent />', () => {
  it('should render', () => {
    const {container} = renderTheme(<GridContent>children</GridContent>);
    expect(container).toMatchSnapshot()
  });
});
