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

export default function List({comments}) {

  return (
    <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Post ID</TableCell>
          <TableCell align="left"><a>ID</a></TableCell>
          <TableCell align="left">name</TableCell>
          <TableCell align="left">Email</TableCell>
          <TableCell align="left">Body</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {/* {comments.map(row => ( */}
            {comments?.map(row =>  (
              // <div key={index}>
            <Link as={`/${row.postId}/${row.id}`} href="/[postId]/[id]">
             
            <TableRow key={row.postId}>
              <TableCell component="th" scope="row">
                {row.postId}
              </TableCell>
              <TableCell align="left"> <a>{row.id}</a></TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
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
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await response.json();
  return {comments: comments}
}