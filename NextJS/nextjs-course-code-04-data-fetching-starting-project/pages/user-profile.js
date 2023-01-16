function UserPorfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserPorfilePage;

//! user data not pre-rendred so people can't get access to it

export async function getServerSideProps(context) {
  //gets rendered every time
  const { params, req, res } = context;

  return {
    props: {
      username: "Raf",
    },
  };
}
