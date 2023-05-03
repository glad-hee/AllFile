const PhotoPage = ({ photo }) => {
  console.log(photo);
  return (
    <main className="ProductDetailPage">
      <h1>여기는 사진 페이지!</h1>
      <div>
        {photo.map((v) => {
          return (
            <ul key={v.id}>
              <li>{v.title}</li>
              <img src={v.url} alt="1" />
            </ul>
          );
        })}
      </div>
    </main>
  );
};

export default PhotoPage;
