/* eslint-disable */
import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>children</Heading>);
    const heading = screen.getByRole('heading', {name: 'children'});
    expect(heading).toHaveStyle({
      color: theme.colors.darkColor,
      'font-size': theme.fonts.sizes.xlarge,
    })
  });

  it('should render corrent heading sizes', () => {
    renderTheme(<Heading size='small'>children</Heading>);
    const heading = screen.getByRole('heading', {name: 'children'});
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xsmall,
    })
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size='big'>children</Heading>);
    const heading = screen.getByRole('heading', {name: 'children'});
    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.medium, {
      media: theme.media.lteMedium
    })
  })

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>children</Heading>);
    const heading = screen.getByRole('heading', {name: 'children'});
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    })
  });

  it('should render correct heading element', () => {
    renderTheme(<Heading as='h6'>children</Heading>);
    const heading = document.querySelector('h6');
    expect(heading?.tagName.toLowerCase()).toBe('h6')
  });

  it('should mach snapshot', () => {
    const { container } = renderTheme(<Heading>texto</Heading>);

    expect(container).toMatchSnapshot();
  });
});
