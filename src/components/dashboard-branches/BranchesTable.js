import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import BoldTableHeaderCell from '../BoldTableHeaderCell';
import ThinTableBodyCell from '../ThinTableBodyCell';
import Loading from '../Loading';
import formatDateRow from '../../utils/formatDate_hourFirst';
import { formatName_surname } from '../../utils/formatName_surname';

const Row = ({
  data: { id, name, manager, location, createdAt },
  setOpenUpdateModal,
  setOpenDeleteModal,
  ...props
}) => {
  let fname;
  let lname;

  if (manager) ({ fname, lname } = manager);
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
        <ThinTableBodyCell text={id} />
        <ThinTableBodyCell text={name} />
        <ThinTableBodyCell
          text={fname && lname && formatName_surname(fname, lname)}
        />
        <ThinTableBodyCell text={location.village} />
        <ThinTableBodyCell text={formatDateRow(createdAt, false)} />
        <TableCell align="center">
          <IconButton
            size="small"
            color="primary"
            onClick={() => {
              setOpenUpdateModal(true);
            }}
          >
            <EditIcon />
          </IconButton>
        </TableCell>
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

function BranchesTable({
  datas,
  setOpenUpdateModal,
  setOpenDeleteModal,
  loadingGet,
  ...props
}) {
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
                <BoldTableHeaderCell title="ID" />
                <BoldTableHeaderCell title="Name" />
                <BoldTableHeaderCell title="Manager" />
                <BoldTableHeaderCell title="Location" />
                <BoldTableHeaderCell title="Created At" />
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map((data, index) => {
                return (
                  <Row
                    key={data.id + ' ' + index}
                    data={data}
                    setOpenUpdateModal={setOpenUpdateModal}
                    setOpenDeleteModal={setOpenDeleteModal}
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

BranchesTable.propTypes = {
  datas: PropTypes.any.isRequired,
  loadingGet: PropTypes.bool.isRequired,
  setOpenUpdateModal: PropTypes.func.isRequired,
  setOpenDeleteModal: PropTypes.func.isRequired,
};

export default BranchesTable;
