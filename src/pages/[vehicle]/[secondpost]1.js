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
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' +
      router.query.mypost +
      '&postId=' +
      router.query.postId);
      const postList = await response.json();
      setposts(postList);
    }

    if(postList.length >= 0) {
        loadData();
    }
  }, []);

  if(!posts[0]) { 
    console.log('id=');
      return <div>loading..w.</div>
      
  }

  return <pre>{posts[0]?.postId}</pre>;

}

mypost.getInitialProps = async ctx => {
    if(!ctx.req) {
        return { postList: [] };
    }

  const { query } = ctx;
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/comments?postId=' +
      query.mypost +
      '&postId=' +
      query.postId
  );
  const postList = await response.json();
  return { postList: postList };
};
