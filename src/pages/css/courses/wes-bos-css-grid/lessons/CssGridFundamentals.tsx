import styled from 'styled-components';
import { ItemStyled } from '../../../../../components/wes-bos-lessons-container/LessonsContainer.styles';

const CssGridFundamentals = () => {
  return (
    <Grid>
      <ItemStyled>1</ItemStyled>
      <ItemStyled>2</ItemStyled>
      <ItemStyled>3</ItemStyled>
      <ItemStyled>4</ItemStyled>
      <ItemStyled>5</ItemStyled>
      <ItemStyled>6</ItemStyled>
      <ItemStyled>7</ItemStyled>
      <ItemStyled>8</ItemStyled>
      <ItemStyled>9</ItemStyled>
      <ItemStyled>10</ItemStyled>
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 6rem 12rem;
  grid-template-rows: 4rem 9rem 6rem;
  grid-gap: 1rem;
`;

export default CssGridFundamentals;
