import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { COLOURS, MOBILE_TOP_BAR_HEIGHT } from '../styles/styles';

const BackButton = () => {
  return (
    <div className='flex align-middle md:hidden fixed top-0 bg-white w-[100dvh]'>
      <StyledLink to='..' relative='path'>
        <span className='text-md'>
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
  height: ${MOBILE_TOP_BAR_HEIGHT};
`;

const BackIcon = styled(ArrowBackIosRoundedIcon)`
  max-height: 1.25rem;
  width: 1.25rem;
`;

export default BackButton;
