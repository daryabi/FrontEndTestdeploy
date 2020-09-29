

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// export default function mypost({postList}){
//     const router = useRouter();
//     return <pre>{JSON.stringify(postList, null, 4)} </pre>
// }
// mypost.getInitialProps= async (ctx) =>{
//     const {query} = ctx;
//     const response = await fetch ('https://jsonplaceholder.typicode.com/posts?userId='+query.mypost);
//     const postList = await response.json();
//     return {postList: postList}
// }
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function mypost({ postList }) {
  const router = useRouter();

 const [posts, setposts] = useState(postList);
  useEffect(() => {
    async function loadData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' +
      router.query.mypost +
      '&userId=' +
      router.query.userId);
      const postList = await response.json();
      setposts(postList);
    }

    if(postList.length == 0) {
        loadData();
    }
  }, []);

  if(!posts[0]) { 
      return <div>loading.d..</div>
  }

//   return <pre>{posts[0]?.title}</pre>;
return(
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
            // <Link as={`/${row.id}/${row.userId}`} href="/[id]/[userId]">
             
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left"> <a>{row.userId}</a></TableCell>
              <TableCell align="left">{row.title}</TableCell>
              
              <TableCell align="left">{row.body}</TableCell>
            </TableRow>
            
            // </Link>
            // </div>
          )
          )}
        </TableBody>
      </Table>
    </TableContainer>
)
}

mypost.getInitialProps = async ctx => {
    if(!ctx.req) {
        return { postList: [] };
    }

  const { query } = ctx;
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=' +
      query.mypost +
      '&userId=' +
      query.userId
  );
  const postList = await response.json();
  return { postList: postList };
};


// export default function mypost({ postList }) {
//   const router = useRouter();

//  const [posts, setposts] = useState(postList);
//   useEffect(() => {
//     async function loadData() {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' +
//       router.query.mypost +
//       '&userId=' +
//       router.query.userId);
//       const postList = await response.json();
//       setposts(postList);
//     }

//     if(postList.length >= 0) {
//         loadData();
//     }
//   }, []);

//   if(!posts[0]) { 
//       return <div>loading...1</div>
//   }

//   return <pre>{posts[0]?.details}</pre>;
// }

// mypost.getInitialProps = async ctx => {
//     if(!ctx.req) {
//         return { postList: [] };
//     }

//   const { query } = ctx;
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?userId=' +
//       query.mypost +
//       '&userId=' +
//       query.userId
//   );
//   const postList = await response.json();
//   return { postList: postList };
// };