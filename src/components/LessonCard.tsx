import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLOURS } from '../styles/styles';

const LessonCard = ({
  id,
  title,
  path,
}: {
  id: number;
  title: string;
  path: string;
}) => {
  return (
    <div className='px-5'>
      <Link
        to={`/css/courses/wesbos-css-grid${path ? `/${path}` : ''}`}
        className='flex flex-col'
      >
        <Card className='shadow-md'>
          <div className='font-semibold flex space-x-2'>
            <div>{id}.</div>
            <div>{title}</div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

const Card = styled.div`
  display: flex;
  height: 3.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 1rem;
  background-color: ${COLOURS.primary[500]};
  color: ${COLOURS.neutral[50]};
  border-radius: 0.5rem;
  align-items: center;

  &:hover {
    color: ${COLOURS.secondary[300]};
  }
`;

export default LessonCard;
