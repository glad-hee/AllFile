import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Student = () => {
  const navigate = useNavigate();
  //   const { name } = useParams();
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  const jisu = searchParams.get("name");
  return (
    <main>
      <h3>
        학생의 이름은 <span style={{ color: "blueviolet" }}>{name}</span> 입니다
      </h3>
      {jisu && (
        <h3>
          실제 이름은
          <span style={{ color: "blue" }}>{jisu}</span>
          입니다
        </h3>
      )}
      <button onClick={() => navigate(-1)}>Back</button>
    </main>
  );
};

export default Student;
