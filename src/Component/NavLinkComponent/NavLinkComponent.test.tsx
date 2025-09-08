import { fireEvent, screen } from '@testing-library/react';
import { NavLinkComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<NavLinkComponent />', () => {
  it('should render with default values', () => {
    renderTheme(<NavLinkComponent to='/'>children</NavLinkComponent>);
    const link = screen.getByRole('link', {name: 'children'})
    expect(link).toHaveStyle({
      'text-decoration': 'none',
      'text-transform': 'uppercase',
      'font-weight': '700',
    })
  });

  it('should render correct size small', () => {
    renderTheme(<NavLinkComponent to='/' size='small'>children</NavLinkComponent>);
    const link = screen.getByRole('link', {name: 'children'})
    expect(link).toHaveStyle({
      'font-size': theme.fonts.sizes.xsmall
    })
  });

  it('should render correct size big', () => {
    renderTheme(<NavLinkComponent to='/' size='big'>children</NavLinkComponent>);
    const link = screen.getByRole('link', {name: 'children'})
    expect(link).toHaveStyle({
      'font-size': theme.fonts.sizes.large
    })
  });

  it('should render with border', () => {
    renderTheme(<NavLinkComponent to='/' hasBorder={true}>children</NavLinkComponent>);
    const link = screen.getByRole('link', {name: 'children'})
    expect(link).toHaveStyle({
      'border': '2px solid #000',
    })
  });

  it('should change color on hover', () => {
    renderTheme(<NavLinkComponent to='/' hasBorder={true}>children</NavLinkComponent>);
    const link = screen.getByRole('link', {name: 'children'});
    
    fireEvent.mouseOver(link);
    
    expect(link).toHaveStyle({
      'background-color': theme.colors.darkColor,
    })
  });

  it('should change the color on clicking the link', () => {
    renderTheme(<NavLinkComponent to='/' hasBorder={true}>children</NavLinkComponent>);
    const link = screen.getByRole('link', {name: 'children'});
    
    fireEvent.click(link);
    
    expect(link).toHaveStyle({
      'background-color': theme.colors.darkColor,
    })
  });

  it('should mach snapshot', () => {
    const { container } = renderTheme(<NavLinkComponent to="/">texto</NavLinkComponent>);

    expect(container).toMatchSnapshot();
  });
});
