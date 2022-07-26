import PropTypes from 'prop-types';
import { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';

import formatDateRow from '../../utils/formatDate_hourFirst';
import BoldTableHeaderCell from '../BoldTableHeaderCell';
import Loading from '../Loading';
import ThinTableBodyCell from '../ThinTableBodyCell';
import DeleteModal from '../DeleteModal';
import { formatName_surname } from '../../utils/formatName_surname';
import AppointmentsDetails from './AppointmentsDetails';

const Row = ({ data, setOpenDeleteModal }) => {
  const {
    startTime,
    endTime,
    status,
    patient,
    user,
    branch,
    service,
    createdAt,
  } = data;

  let fnameP;
  let lnameP;
  let fnameD;
  let lnameD;
  let branchName;
  let serviceName;

  if (patient) ({ fname: fnameP, lname: lnameP } = patient);
  if (user) ({ fname: fnameD, lname: lnameD } = user);
  if (branch) ({ name: branchName } = branch);
  if (service) ({ name: serviceName } = branch);

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
        <ThinTableBodyCell text={formatDateRow(startTime)} />
        <ThinTableBodyCell text={formatDateRow(endTime)} />
        <ThinTableBodyCell text={status} />
        <ThinTableBodyCell
          text={fnameP && lnameP && formatName_surname(fnameP, lnameP)}
        />
        <ThinTableBodyCell
          text={fnameD && lnameD && formatName_surname(fnameD, lnameD)}
        />
        <ThinTableBodyCell text={branchName} />
        <ThinTableBodyCell text={serviceName} />
        <ThinTableBodyCell text={formatDateRow(createdAt, false)} />
        <TableCell align="center">
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setOpenDeleteModal(true);
            }}
          >
            <DeleteForeverIcon />
          </IconButton>
        </TableCell>
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
            <Box sx={{ margin: 1 }}>
              <AppointmentsDetails data={data} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function AppointmentsTable({ datas, loadingGet, ...props }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <>
      <Box
        sx={{
          paddingX: '10px',
          paddingBottom: '10px',
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'auto',
        }}
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
                  <BoldTableHeaderCell title="Start Time" />
                  <BoldTableHeaderCell title="End Time" />
                  <BoldTableHeaderCell title="Status" />
                  <BoldTableHeaderCell title="Patient Name" />
                  <BoldTableHeaderCell title="Doctor Name" />
                  <BoldTableHeaderCell title="Branch" />
                  <BoldTableHeaderCell title="Service" />
                  <BoldTableHeaderCell title="Created At" />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {datas.map((data, index) => {
                  return (
                    <Row
                      key={data.id + ' ' + index}
                      data={data}
                      setOpenDeleteModal={setOpenDeleteModal}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        title="Delete Appointment"
        message="Do you really Want to delete this Appointments?"
      />
    </>
  );
}

AppointmentsTable.propTypes = {
  datas: PropTypes.any.isRequired,
  loadingGet: PropTypes.bool.isRequired,
};

export default AppointmentsTable;
