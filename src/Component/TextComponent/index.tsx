import * as Styled from './styles';

export type TextComponentProps = {
  children: React.ReactNode;
  hasBackground?: boolean,
  uppercase?: boolean,
};

export const TextComponent = ({children, hasBackground = false, uppercase = false}:TextComponentProps) => {
  return (
    <Styled.Container 
      hasBackground={hasBackground}
      uppercase={uppercase}
    >
      {children}
    </Styled.Container>
  );
};
