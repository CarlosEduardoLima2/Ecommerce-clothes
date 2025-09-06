import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render with default values', () => {
    renderTheme(<TextComponent>children</TextComponent>);
    const text = screen.getByText('children');
    expect(text).toHaveStyle({
      color: theme.colors.darkColor,
      'font-style': 'italic',
    })
  });

  it('should render text background', () => {
    renderTheme(<TextComponent hasBackground>children</TextComponent>);
    const text = screen.getByText('children');
    expect(text).toHaveStyle({
      'background-color': theme.colors.secondaryColor,
      width: 'fit-content',
      'font-size': theme.fonts.sizes.small,
      'font-weight': '700',
      padding: '12px 20px 10px',
      'font-style': 'normal',
      'border-radius': theme.fonts.sizes.xsmall,
    })
  });

  it('should render with uppercase letters', () => {
    renderTheme(<TextComponent uppercase>children</TextComponent>);
    const text = screen.getByText('children');
    expect(text).toHaveStyle({
      'text-transform': 'uppercase',
    })
  });

  it('should mach snapshot', () => {
    const { container } = renderTheme(<TextComponent>texto</TextComponent>);

    expect(container).toMatchSnapshot();
  });
});
