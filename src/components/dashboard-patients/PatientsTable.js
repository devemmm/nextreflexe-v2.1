import PropTypes from 'prop-types';
import { useState } from 'react';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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
  Typography,
  useTheme,
} from '@mui/material';
import BoldTableHeaderCell from '../BoldTableHeaderCell';
import Loading from '../Loading';
import ThinTableBodyCell from '../ThinTableBodyCell';

const Row = ({
  data: { id, email, phone, status, diagnosis },
  setOpenEditModal,
  ...props
}) => {
  const theme = useTheme();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <TableRow
        sx={{
          background: '#FFFFFF',
          border: `1.1px solid ${theme.palette.primary.light}`,
          borderRadius: '30px',
          '& > *': { borderBottom: 'unset' },
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
        <ThinTableBodyCell text={id} />
        <ThinTableBodyCell text={email} />
        <ThinTableBodyCell text={phone} />
        <ThinTableBodyCell text={status} />
        <ThinTableBodyCell text={diagnosis} />
        <TableCell align="center">
          <IconButton
            size="small"
            color="primary"
            onClick={() => {
              setOpenEditModal(true);
            }}
          >
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton size="small" color="error">
            <DeleteForeverIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={showDetails} unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="p" gutterBottom component="div">
                "Details
              </Typography>
              <Box
                sx={{
                  background: theme.colors.grey,
                  paddingX: { xs: '20px', md: '35px' },
                  paddingY: '15px',
                  width: '100%',
                  height: '300px',
                }}
              ></Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function PatientsTable({ datas, setOpenEditModal, loadingGet, ...props }) {
  const modifiedDatas = [
    ...datas,
    ...datas,
    ...datas,
    ...datas,
    ...datas,
    ...datas,
    ...datas,
    ...datas,
  ];

  return (
    <Box
      sx={{
        paddingX: '10px',
        paddingBottom: '10px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        position: 'relative',
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
                <BoldTableHeaderCell title="Id" />
                <BoldTableHeaderCell title="Email" />
                <BoldTableHeaderCell title="Phone" />
                <BoldTableHeaderCell title="Status" />
                <BoldTableHeaderCell title="Diagnosis" />
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {modifiedDatas.map((data, index) => {
                return (
                  <Row
                    key={data.id + ' ' + index}
                    data={data}
                    setOpenEditModal={setOpenEditModal}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

PatientsTable.propTypes = {
  datas: PropTypes.any.isRequired,
  loadingGet: PropTypes.bool.isRequired,
  setOpenEditModal: PropTypes.func.isRequired,
};

export default PatientsTable;

