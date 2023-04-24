const PostItem = ({ data }) => {
  console.log(data);
  const list = data; // ?
  console.log(list);
  return (
    <>
      {list.map((v) => {
        return (
          <div className="container" key={v.id}>
            <span className="id">{v.id}</span>
            <span className="title">{v.title}</span>
            <p className="body">{v.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default PostItem;
