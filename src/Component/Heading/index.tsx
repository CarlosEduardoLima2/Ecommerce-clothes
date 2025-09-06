import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  as?: 'h1'| 'h2'| 'h3'| 'h4' | 'h5' | 'h6';
  size?: 'small'| 'medium'| 'big'
  uppercase?: boolean
};

export const Heading = ({children, as = 'h2', size = 'big', uppercase = false}:HeadingProps) => {
  return (
    <Styled.Container as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Container>
  );
};
