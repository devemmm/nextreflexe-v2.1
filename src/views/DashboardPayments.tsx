import { useSelector } from 'react-redux';
import DashboardHeader from '../components/DashboardHeader';
import PaymentsTable from '../components/dashboard-payments/PaymentsTable';
import { PaymentProps } from 'src/types/dashboardTypes';

function DashboardPayments() {
  const { data, loadingGet } = useSelector(
    (state: any) => state.paymentsReducer,
  );
console.log("DATA: ",data);
  return (
      <div
      className='relative w-full h-full flex flex-col flex-nowrap'
      >
        <DashboardHeader title="Payments History" />
        <PaymentsTable datas={data as PaymentProps[]} loadingGet={loadingGet} />
      </div>
  );
}

export default DashboardPayments;

