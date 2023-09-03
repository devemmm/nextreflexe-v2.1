import { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme
} from '@mui/material';

import { Download } from 'phosphor-react';
// import print_logo from 'src/assets/images/logo2.png';
import { PaymentProps } from 'src/types/dashboardTypes';
import formatDateRow from '../../utils/formatDate_hourFirst';
import { formatName_surname } from '../../utils/formatName_surname';
import toThousands from '../../utils/toThousand';
import BoldTableHeaderCell from '../BoldTableHeaderCell';
import Loading from '../Loading';
import Search from '../Search';
import ThinTableBodyCell from '../ThinTableBodyCell';
import useGeneratePayslip from '../../hooks/useGeneratePayslip';
import { format } from 'date-fns';
const logo2 = require('src/assets/images/logo2.png');
function PaymentsTable({ datas, loadingGet}:{datas: PaymentProps[],loadingGet:boolean}) {
  const [filteredData, setFilteredData] = useState<PaymentProps[]>([]);

  function searchFunc(searchKey) {
    let result = datas.filter(
      (item) =>
        item.patient.nid.includes(searchKey) ||
        item.patient.fname.includes(searchKey) ||
        item.patient.lname.includes(searchKey) ||
        item.patient.email.includes(searchKey) ||
        item.patient.phone.includes(searchKey),
    );
    setFilteredData(result);
  }

  return (
    <>
      <div
      className='px-[10px] pb-[10px] w-full h-full relative overflow-auto'
      >
        {loadingGet ? (
          <Loading />
        ) : (
          <>
            <Search searchFunc={searchFunc} />
            <TableContainer
              sx={{
                background: 'white',
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <BoldTableHeaderCell title="Session Price" />
                    <BoldTableHeaderCell title="Amount Paid" />
                    <BoldTableHeaderCell title="Remaining Session" />
                    <BoldTableHeaderCell title="Payment Method" />
                    <BoldTableHeaderCell title="Status" />
                    <BoldTableHeaderCell title="Patient" />
                    <BoldTableHeaderCell title="Service" />
                    <BoldTableHeaderCell title="Created At" />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.length === 0
                    ? datas?.map((filtered, index) => {
                        return <Row key={filtered.id + ' ' + index} data={filtered} />;
                      })
                    : filteredData.map((data, index) => {
                        return <Row key={data.id + ' ' + index} data={data} />;
                      })}
                </TableBody>
              </Table>
            </TableContainer>

          </>
        )}
      </div>
    </>
  );
}

export default PaymentsTable;

const Row = ( {data}: {data:PaymentProps}) => {
const {patient,service,visit} = data;

  const theme = useTheme();
  const [showDetails, setShowDetails] = useState(false);
  const {isLoading, generatePayslip, paymentRef} = useGeneratePayslip({payment:data})
  return (
    <>
      <TableRow
        sx={{
          background: '#FFFFFF',
          borderTop: `1.1px solid ${theme.palette.primary.light}`,
          borderRadius: '30px',
        }}
      >
        <TableCell align="center">
          <IconButton
            size="small"
            color="primary"
            onClick={() => {
              setShowDetails(!showDetails);
            }}
          >
            {showDetails ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <ThinTableBodyCell text={data.sessionPrice} />
        <ThinTableBodyCell text={data.pay} />
        <ThinTableBodyCell text={data.remainsSession} />
        <ThinTableBodyCell text={data.paymentMethod} />
        <ThinTableBodyCell text={data.status} />
        <ThinTableBodyCell text={formatName_surname(patient.fname as string, patient.lname as string)} />
        <ThinTableBodyCell text={service.name} />
        <ThinTableBodyCell text={formatDateRow(data.createdAt, false)} />
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            border: '0px',
          }}
          colSpan={10}
        >
          <Collapse in={showDetails} unmountOnExit>
            <div className='payment-details-container'>
              <div className='m-1 text-primary font-bold text-sm'>
                Details
              </div>
              <div className='bg-secondary px-[20px] py-[15px] w-full flex flex-row gap-2 mb-4'
              >
                <div className='payment-info w-[40%]'>
                  <span className='text-md p-2 flex justify-between font-bold'>PAYMENT INFO</span>
                  <div className='flex flex-col gap-2 border p-2'>
                      <span className='text-sm flex'>Credit: {data.credit}</span>
                      <span className='text-sm flex'>Debit: {data.debit}</span>
                      <span className='text-sm flex'>Pay: {data.pay}</span>
                      <span className='text-sm flex'>Session Price: {data.sessionPrice}</span>
                      <span className='text-sm flex'>Total Sessions: {data.totalSession}</span>
                      <span className='text-sm flex'>Total Payment: {data.totalPayment}</span>
                  </div>
                </div>
                <div className=' w-[40%]'>
                  <span className='text-md p-2 flex justify-between font-bold'>PATIENT INFO</span>
                  <div className='flex flex-col gap-2 border p-2'>
                      <span className='text-sm flex'>NID: {patient.nid}</span>
                      <span className='text-sm flex'>Full Name: {patient.lname} {patient.fname}</span>
                      <span className='text-sm flex'>Phone: {patient.phone}</span>
                      <span className='text-sm flex'>Email: {patient.email}</span>
                      <span className='text-sm flex'>DoB: {patient.dob}</span>
                  </div>
                </div>
                <div className=' w-[40%]'>
                  <span className='text-md p-2 flex justify-between font-bold'>SERVICE INFO</span>
                  <div className='flex flex-col gap-2 border p-2'>
                      <span className='text-sm flex'>Service: {service.name}</span>
                      <span className='text-sm flex'>Status: {service.status}</span>
                      <span className='text-sm flex'>Started At: {format(new Date(visit.startTime),'dd-MM-yyyy hh:mm a')}</span>
                  </div>
                </div>
              </div>
               <div className='download-button flex items-center gap-8 py-1 text-white mb-4'>
                {!isLoading?(
                    <button onClick={generatePayslip} className='p-2 flex flex-col items-center text-xsm font-semibold bg-primary py-1 rounded-full w-[120px]'>
                      <Download className='h-[18px w-[18px'/>
                      Download Receipt
                    </button>
                ):(
                  <span className='text-sm bg-primary'>Downloading...</span>
                )}
                </div>
            </div>
            {isLoading &&(
              <div className='absolute left-[110%]'>
                <div ref={paymentRef}>
                  <PaymentSlip payment={data}/>
                </div>
              </div>
            )}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export const PaymentSlip = ({payment}:{payment: PaymentProps})=>{
  return(  <div className='payment-slip-container min-h-screen border border-b-0 border-genuine-blue-300 print:block h-[90%] print:w-[400px] bg-transparent flex-col flex w-[600px]'>
        <div className='flex justify-center w-full p-2 mt-2 mb-2'>
            <img className='w-[120px]' src={logo2} alt="logo" />
        </div>
        <div className='text-black m-4 font-bold text-sm text-[18px] flex justify-center'>
              SERVICE PAYMENT RECEIPT
        </div>
        <div className='bg-secondary m-6 border border- items-center gap-2 flex justify-center'>
          <div className='w-[90%] gap-2 py-8'>
                  <span className='text-md p-2 flex justify-between font-bold text-xs'>PAYMENT DETAILS</span>
                  <div className='flex flex-col gap-2 p-2'>
                    <div className='flex flex-row justify-between'>
                      <span className='text-sm flex'>Transaction ID:</span>
                      <span>{payment.id}</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                      <span className='text-sm flex'>Customer Name: </span>
                      <span>{payment.patient.lname} {payment.patient.fname}</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                      <span className='text-sm flex'>Phone: </span>
                      <span>{payment.patient.phone}</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                      <span className='text-sm flex'>Service:</span>
                      <span>{payment.service.name}</span>
                    </div> 
                    <div className='flex flex-row justify-between'>
                      <span>Status: </span>
                      <span className='ml-1 font-bold'>{payment.status}</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                      <span>Amount Paid: </span>
                      <span className='ml-1 font-bold'> RWF { toThousands(payment.pay)}</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                      <span className='text-sm flex'>Payment Method: </span>
                      <span>{payment.paymentMethod}</span>
                    </div>
                     <div className='flex flex-row justify-between'>
                      <span className='text-sm flex'>Payment Date: </span>
                      <span>{ format(new Date(payment.createdAt),'dd-MM-yyyy hh:mm a')}</span>
                    </div>
                  </div>
                </div>
        </div>
        <span className='p-2 m-6 border-b border-black opacity-10'></span>
        <div className='flex-col p-2 mx-6 border items-center gap-2 flex justify-center'>
          <span className='self-start'>Notice:</span>
          <p className='text-xs'>
Please note that all service payments are final and no refunds will be processed. Once payment is made, it cannot be reversed or refunded. We kindly request you to carefully review your purchase before making a payment. Should you have any concerns or questions, please contact our customer support team at +250 788 596 281. We are here to assist you.
          </p>
        </div>
      </div>)
}
PaymentSlip.displayName = 'PaymentSlip';