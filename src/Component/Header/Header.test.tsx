import { screen } from '@testing-library/react';
import { Header } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Header />', () => {
  it('should render', () => {
    renderTheme(<Header />);
  });
});
