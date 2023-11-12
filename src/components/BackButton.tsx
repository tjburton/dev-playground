import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { COLOURS } from '../styles/styles';

const BackButton = () => {
  return (
    <div className='md:hidden'>
      <StyledLink to='..' relative='path'>
        <span className='text-sm'>
          <BackIcon />
          Back
        </span>
      </StyledLink>
    </div>
  );
};

const StyledLink = styled(Link)`
  color: ${COLOURS.primary[500]};
  font-weight: 500;
  display: block;
  margin-bottom: 1rem;
`;

const BackIcon = styled(ArrowBackIosRoundedIcon)`
  max-height: 1rem;
  width: 1rem;
`;

export default BackButton;
