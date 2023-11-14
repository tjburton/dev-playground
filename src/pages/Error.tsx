import { Fragment } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Container from '../components/AppContainer';

const Error = () => {
  return (
    <Fragment>
      <Sidebar />
      <Container>
        <div className='flex justify-center items-center h-[95vh]'>
          <div className='flex flex-col items-center justify-center h-[40vh] w-[50vw] p-20 shadow-xl rounded-xl bg-indigo-600 text-indigo-50'>
            <h1 className='text-2xl'>Oops!</h1>
            <h3 className='text-lg'>An error occurred :(</h3>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Error;
