import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default function List({postList}) {


  return (
    <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell align="left"><a>User Id</a></TableCell>
          <TableCell align="left">Title</TableCell>
          <TableCell align="left">Body</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {/* {postList.map(row => ( */}
            {postList?.map(row =>  (
              // <div key={index}>
            <Link as={`/${row.id}/${row.userId}`} href="/[id]/[userId]">
             
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left"> <a>{row.userId}</a></TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.body}</TableCell>
            </TableRow>
            
            </Link>
            // </div>
          )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

List.getInitialProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postList = await response.json();
  return {postList: postList}
}