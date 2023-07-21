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
import VisitsDetails from './VisitsDetails';
import Search from '../Search';

const Row = ({ data, setOpenDeleteModal, setId }: any) => {
  const {
    id,
    startTime,
    endTime,
    patient: { fname: fnameP, lname: lnameP },
    user: { fname: fnameD, lname: lnameD },
    status,
    createdAt,
  } = data && data;
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
        <ThinTableBodyCell text={startTime} />
        <ThinTableBodyCell text={endTime} />
        <ThinTableBodyCell text={formatName_surname(fnameP, lnameP)} />
        <ThinTableBodyCell text={formatName_surname(fnameD, lnameD)} />
        <ThinTableBodyCell text={status} />
        <ThinTableBodyCell text={formatDateRow(createdAt, false)} />
        <TableCell align="center">
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setOpenDeleteModal(true);
              setId(id);
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
              <VisitsDetails data={data} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function VisitsTable({ datas, loadingGet, ...props }: any) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [id, setId] = useState(0);

  const [filteredData, setFilteredData] = useState([]);

  function searchFunc(searchKey: string) {
    let result = datas.filter(
      (item: {
        patient: {
          fname: string | string[];
          lname: string | string[];
          email: string | string[];
          phone: string | string[];
        };
      }) =>
        item.patient.fname.includes(searchKey) ||
        item.patient.lname.includes(searchKey) ||
        item.patient.email.includes(searchKey) ||
        item.patient.phone.includes(searchKey),
    );
    setFilteredData(result);
  }

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
        {...props}
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
                    <BoldTableHeaderCell title="Start Time" />
                    <BoldTableHeaderCell title="End Time" />
                    <BoldTableHeaderCell title="Patient Name" />
                    <BoldTableHeaderCell title="Doctor Name" />
                    <BoldTableHeaderCell title="Status" />
                    <BoldTableHeaderCell title="Created At" />
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.length === 0
                    ? datas.length &&
                      datas.map((data: { id: string }, index: string) => {
                        return (
                          <Row
                            key={data.id + ' ' + index}
                            data={data}
                            setOpenDeleteModal={setOpenDeleteModal}
                            setId={setId}
                          />
                        );
                      })
                    : filteredData.length &&
                      filteredData.map((data: any, index) => {
                        return (
                          <Row
                            key={data.id + ' ' + index}
                            data={data}
                            setOpenDeleteModal={setOpenDeleteModal}
                            setId={setId}
                          />
                        );
                      })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Box>
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        title="Delete Visit"
        message="Do you really Want to remove this Visit ?"
        value={id}
      />
    </>
  );
}

VisitsTable.propTypes = {
  datas: PropTypes.any.isRequired,
  loadingGet: PropTypes.bool.isRequired,
};

export default VisitsTable;

