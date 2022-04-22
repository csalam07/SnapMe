import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Loading from './Loading';

function Notify() {
  const { alert } = useSelector((state) => state);
  console.log(alert);
  useEffect(() => {
    if (alert.success) {
      toast.success(alert.success);
    } else if (alert.error) {
      toast.error(alert.error);
    }
  }, [alert]);
  return (
    <div>
      {alert.loading && <Loading />}
      <ToastContainer />
    </div>
  );
}

export default Notify;
