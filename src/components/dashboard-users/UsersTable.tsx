import PropTypes from 'prop-types';
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

import { UserProps } from 'src/types/dashboardTypes';
import formatDateRow from '../../utils/formatDate_hourFirst';
import BoldTableHeaderCell from '../BoldTableHeaderCell';
import Loading from '../Loading';
import ThinTableBodyCell from '../ThinTableBodyCell';

const Row = ({ data}: {data:UserProps}) => {
  const theme = useTheme();
  const [showDetails, setShowDetails] = useState(false);

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
        <ThinTableBodyCell text={data.fname} />
        <ThinTableBodyCell text={data.lname} />
        <ThinTableBodyCell text={data.email} />
        <ThinTableBodyCell text={data.phone} />
        <ThinTableBodyCell text={data.userType} />
        <ThinTableBodyCell text={data.status} />
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
                <div className='flex tems-cente justify-center align-center'>
                    <img src={data.avatar} alt="avatar" className='w-[50] h-[50px] rounded-full flex'/>
                </div>
                <div className='payment-info w-[50%]'>
                  <span className='text-md p-2 flex justify-between text-xs font-bold'>USER INFO</span>
                  <div className='flex flex-col gap-2 border p-2'>
                      <span className='text-sm flex'>NID: {data.nid}</span>
                      <span className='text-sm flex'>Status: {data.status}</span>
                      <span className='text-sm flex'>Phone Verified: {data.phoneVerified ? "YES":"NO"}</span>
                      <span className='text-sm flex'>Role: {data.userType}</span>
                  </div>
                </div>
                <div className=' w-[50%]'>
                  <span className='text-md p-2 flex justify-between font-bold text-xs'>LOCATION INFO</span>
                  <div className='flex flex-col gap-2 border p-2'>
                      <span className='text-sm flex'>Countryy: {data.location.country}</span>
                      <span className='text-sm flex'>Province: {data.location.province}</span>
                      <span className='text-sm flex'>Sector: {data.location.sector}</span>
                      <span className='text-sm flex'>Village: {data.location.village}</span>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function UsersTable({ datas, loadingGet }: {datas: UserProps[], loadingGet: boolean }) {
  return (
    <>
      <div
        className='px-[10px] pb-[10px] w-full h-full relative overflow-auto'
      >
        {loadingGet ? (
          <Loading />
        ) : (
          <TableContainer
            sx={{
              background: 'white',
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <BoldTableHeaderCell title="First name" />
                  <BoldTableHeaderCell title="Last name" />
                  <BoldTableHeaderCell title="Email" />
                  <BoldTableHeaderCell title="Phone number" />
                  <BoldTableHeaderCell title="Role" />
                  <BoldTableHeaderCell title="Status" />
                  <BoldTableHeaderCell title="Created At" />
                </TableRow>
              </TableHead>
              <TableBody>
                {datas.map((data, index) => {
                  return <Row key={data.id + ' ' + index} data={data} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
}

UsersTable.propTypes = {
  datas: PropTypes.any.isRequired,
  loadingGet: PropTypes.bool.isRequired,
};

export default UsersTable;

