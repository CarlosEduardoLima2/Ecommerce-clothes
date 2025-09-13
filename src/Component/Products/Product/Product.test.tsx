import { screen } from '@testing-library/react';
import { Product } from '.';
import { renderTheme } from '../../../styles/render-theme';
import { mock } from '../mock';

describe('<Product />', () => {
  it('should mach snapshot', () => {
    const { container } = renderTheme(<Product to="/" {...mock}/>);
    expect(screen.getByText('Camisa com logo')).toBeInTheDocument();
    expect(screen.getByRole('img', {name: "Camisa com logo"})).toBeInTheDocument();
    expect(screen.getByText('New!')).toBeInTheDocument();
    expect(screen.getByText('$40')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
