// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUserById } from 'redux/Users/usersOperations';
// import { selectUser } from 'redux/Users/usersSelectors';
// import { useParams } from 'react-router-dom';
// import { Modal } from 'components/Modal/Modal';

// const UsersDetailsPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);
//   const { id } = useParams();

//   useEffect(() => {
//     dispatch(fetchUserById(id));
//   }, [dispatch, id]);

//   const handleClick = () => {
//     setIsModalOpen(true);
//   };

//   return (
//     <>
//       {user && (
//         <>
//           <p>Name: {user.name}</p>
//           <img src={`${user.avatar}`} alt="User avatar" />
//           <p>Email: {user.email}</p>
//           <p>Tel.: {user.tel}</p>
//           <p>Address: {user.address}</p>
//         </>
//       )}
//       <button type="button" onClick={handleClick}>
//         Delete
//       </button>
//       {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} id={id} />}
//     </>
//   );
// };

// export default UsersDetailsPage;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/Users/usersSelectors';
import { fetchUserById } from 'redux/Users/usersOperations';
import { useParams } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import { Link } from 'react-router-dom';

const UsersDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <img src={`${user.avatar}`} alt="User avatar" />
          <p> Email: {user.email}</p>
          <p>Tel.:{user.tel}</p>
          <p>Address: {user.address}</p>
        </div>
      )}
      <button type="button" onClick={handleClick}>
        Delete
      </button>
      <Link to="update" state={user}>
        Update
      </Link>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} id={id} />}
    </>
  );
};

export default UsersDetailsPage;
