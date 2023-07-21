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
import DeleteModal from '../DeleteModal';

const Row = ({
  data: { id, name, manager, location, createdAt },
  setOpenUpdateModal,
  setOpenDeleteModal,
  setId,
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
              setId(id);
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
              <Typography variant="body1" gutterBottom component="div">
                "Details
              </Typography>
              <Box
                sx={{
                  background: '#F4F4F4',
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

function BranchesTable({ datas, setOpenUpdateModal, loadingGet, ...props }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [id, setId] = useState(0);
  return (
    <>
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
                {datas.length &&
                  datas.map((data, index) => {
                    return (
                      <Row
                        key={data.id + ' ' + index}
                        data={data}
                        setOpenUpdateModal={setOpenUpdateModal}
                        setOpenDeleteModal={setOpenDeleteModal}
                        setId={setId}
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
        title="Delete Branch"
        message="Do you really Want to delete this Branch?"
        value={id}
      />
    </>
  );
}

BranchesTable.propTypes = {
  datas: PropTypes.any.isRequired,
  loadingGet: PropTypes.bool.isRequired,
  setOpenUpdateModal: PropTypes.func.isRequired,
  setOpenDeleteModal: PropTypes.func.isRequired,
};

export default BranchesTable;

