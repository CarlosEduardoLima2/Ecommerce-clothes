import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  to: string
};

export const Button = ({children, to}:ButtonProps) => {
  return (
    <Styled.Container to={to}>
      {children}
    </Styled.Container>
  );
};
