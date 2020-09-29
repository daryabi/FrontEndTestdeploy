import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import fetch from 'isomorphic-unfetch';

export default function Vehicles({ list }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">User Id</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.userId}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Vehicles.getInitialProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await response.json();
  return { list: json };
};