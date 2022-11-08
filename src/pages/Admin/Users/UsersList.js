import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useNav from '../../../hooks/useNavigation'
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

import Menu from "../../../components/Menu"

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}
  
const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const Users = () => {
    const [users, setUsers] = useState();
    const { setTitle } = useNav()
    // const axiosPrivate = useAxiosPrivate();
    // const navigate = useNavigate();
    // const location = useLocation();

    // useEffect(() => {
    //     let isMounted = true;
    //     const controller = new AbortController();

    //     const getUsers = async () => {
    //         try {
    //             // console.log(`Controller ${controller.signal}`)
    //             const response = await axiosPrivate.get('/api/v1/users', {
    //                 signal: controller.signal
    //             });
    //             console.log(response.data);
    //             isMounted && setUsers(response.data);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     }

    //     getUsers();

    //     return () => {
    //         isMounted = false;
    //         controller.abort();
    //     }
    // }, [])

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (e, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (e) => {
      setRowsPerPage(+e.target.value);
      setPage(0);
    };

    const attrs = {
        menu: {
            cn: ['secondary']
        }
    }

    useEffect(() => {
        setTitle('Users')
    }, [])

    return (
        <>
            {/* <Menu {...attrs.menu} /> */}
            <article>
                {/* <h2>Users List</h2>
                {users?.length
                    ? (
                        <ul>
                            {users.map((user, i) => <li key={i}>{user?.email}</li>)}
                        </ul>
                    ) : <p>No users to display</p>
                } */}

                <Button color='primary' variant="contained">Test</Button>

                <Badge badgeContent={4} color="primary">
                    <MailIcon color="action" />
                </Badge>


                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number'
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                    );
                                    })}
                                </TableRow>
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </article>
        </>
    );
};

export default Users;