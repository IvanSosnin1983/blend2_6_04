import { useDispatch } from 'react-redux';
import { deletehUserById } from 'redux/Users/usersOperations';
import { useNavigate } from 'react-router-dom';

export const Modal = ({ setIsModalOpen, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleYes = () => {
    setIsModalOpen(false);
    dispatch(deletehUserById(id));
    navigate('/users');
  };

  const handleNo = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <p>Are you sure?</p>
      <button type="button" onClick={handleYes}>
        Yes
      </button>
      <button type="button" onClick={handleNo}>
        No
      </button>
    </>
  );
};
