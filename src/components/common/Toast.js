import { useToasts } from 'react-toast-notifications';
import PropTypes from 'prop-types';

export const Toast = ({ type, message }) => {
  console.log(type);
  console.log(message);

  const { addToast } = useToasts();
  return (
    <button
      onClick={() =>
        addToast('cenas', {
          appearance: 'success',
          autoDismiss: true,
          autoDismissTimeout: 5000,
        })
      }
    >
      Add Toast
    </button>
  );
};

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
