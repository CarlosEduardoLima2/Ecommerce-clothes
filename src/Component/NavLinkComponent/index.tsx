import * as Styled from './styles';

export type NavLinkComponentProps = {
  children: React.ReactNode;
  to: string,
  size?: 'small'|'big',
  hasBorder?: boolean
};

export const NavLinkComponent = ({children, to, size="small", hasBorder=false}:NavLinkComponentProps) => {
  return (
    <Styled.Container to={to} size={size} hasBorder={hasBorder}>
      {children}
    </Styled.Container>
  );
};
