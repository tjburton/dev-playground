import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CourseCard = ({
  imageUrl,
  title,
  path,
}: {
  imageUrl?: string;
  title: string;
  path?: string;
}) => {
  return (
    <Fragment>
      <div className='flex flex-row mt-5'>
        <Link to={`/css/courses/wesbos-css-grid${path ? `/${path}` : ''}`}>
          <div className='flex flex-col'>
            <div className='shadow-lg rounded-xl bg-slate-300'>
              {imageUrl ? (
                <ImageDiv imageUrl={imageUrl} />
              ) : (
                <CardDiv className='text-lg font-semibold mt-1 ml-auto mr-auto'>
                  {title}
                </CardDiv>
              )}
            </div>
            {imageUrl && (
              <div className='text-lg font-semibold mt-1 ml-auto mr-auto'>
                {title}
              </div>
            )}
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 16rem;
  height: 10rem;
  border-radius: 0.75rem;
  padding: 1rem;
`;

const ImageDiv = styled.div<{ imageUrl: string }>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 16rem;
  height: 10rem;
  border-radius: 0.75rem;
`;

export default CourseCard;
