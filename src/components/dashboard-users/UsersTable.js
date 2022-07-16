import PropTypes from 'prop-types';
import { useState } from 'react';

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

import formatDateRow from '../../utils/formatDate_hourFirst';
import BoldTableHeaderCell from '../BoldTableHeaderCell';
import Loading from '../Loading';
import ThinTableBodyCell from '../ThinTableBodyCell';

const Row = ({
  data: { fname, lname, email, phone, userType, status, createdAt },
}) => {
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
        <ThinTableBodyCell text={fname} />
        <ThinTableBodyCell text={lname} />
        <ThinTableBodyCell text={email} />
        <ThinTableBodyCell text={phone} />
        <ThinTableBodyCell text={userType} />
        <ThinTableBodyCell text={status} />
        <ThinTableBodyCell text={formatDateRow(createdAt, false)} />
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

function UsersTable({ datas, loadingGet, ...props }) {
  if (datas && datas.length !== 0) {
    datas = [
      ...datas,
      ...datas,
      ...datas,
      ...datas,
      ...datas,
      ...datas,
      ...datas,
      ...datas,
    ];
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
      </Box>
    </>
  );
}

UsersTable.propTypes = {
  datas: PropTypes.any.isRequired,
  loadingGet: PropTypes.bool.isRequired,
};

export default UsersTable;

