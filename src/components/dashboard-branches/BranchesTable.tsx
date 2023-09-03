import { useState } from 'react';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  // Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme
} from '@mui/material';

import formatDateRow from '../../utils/formatDate_hourFirst';
import { formatName_surname } from '../../utils/formatName_surname';
import BoldTableHeaderCell from '../BoldTableHeaderCell';
import DeleteModal from '../DeleteModal';
import Loading from '../Loading';
import ThinTableBodyCell from '../ThinTableBodyCell';

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
      {/* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={showDetails} unmountOnExit>
            <div className='m-1'>
              <div className='m-1 text-primary font-bold text-sm'>
                Details
              </div>
              <div
                className='bg-secondary px-[20px] py-[15px] w-full flex flex-row gap-2 mb-4'
              ></div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </>
  );
};

function BranchesTable({ datas, setOpenUpdateModal, loadingGet, ...props }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [id, setId] = useState(0);
  return (
    <>
      <div
        className='px-[10px pb-[10px] w-full h-full overflow-auto relative'
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
      </div>
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

export default BranchesTable;

