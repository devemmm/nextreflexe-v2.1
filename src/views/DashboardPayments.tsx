import { useSelector } from 'react-redux';
import DashboardHeader from '../components/DashboardHeader';
import PaymentsTable from '../components/dashboard-payments/PaymentsTable';
function DashboardPayments() {
  const { data, loadingGet } = useSelector(
    (state: any) => state.paymentsReducer,
  );

  return (
      <div
      className='relative w-full h-full flex flex-col flex-nowrap'
      >
        <DashboardHeader title="Payments History" />
        <PaymentsTable datas={data} loadingGet={loadingGet} />
      </div>
  );
}

export default DashboardPayments;

