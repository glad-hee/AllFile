import { useState } from "react";

const Practice = () => {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comment, setComment] = useState([
    {
      id: 1,
      writer: "민수",
      title: "안뇽",
    },
    {
      id: 2,
      writer: "지민",
      title: "하이하이",
    },
    {
      id: 3,
      writer: "희수",
      title: "멋쟁이",
    },
  ]);

  const addComment = () => {
    const newList = {
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newList]);

    // setComment(newList);
    setInputTitle("");
    setInputWriter("");
  };

  const [inputSearch, setInputSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  const search = () => {
    const newSearch = comment.filter((v) => v.writer == inputSearch);
    console.log(newSearch);
    const appendList = searchList.concat({
      id: newSearch.id,
      writer: newSearch.writer,
      title: newSearch.title,
    });

    setSearchList(appendList);
    console.log(appendList);
  };

  return (
    <div>
      <fieldset>
        <label htmlFor="writer">작성자:</label>
        <input
          id="writer"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </fieldset>
      <select name="작성자">
        {comment.map((v) => (
          <option value={v.id}>{v.writer}</option>
        ))}
      </select>
      <input
        type="text"
        value={inputSearch}
        placeholder="검색어"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <button onClick={search}>검색</button>
      <button>전체</button>
      <br />
      <table
        border={1}
        cellSpacing={0}
        style={{ margin: "30px auto", width: "500px" }}
      >
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: comment state 반복 */}
          {comment.map((v) => (
            <tr>
              <th>{v.id}</th>
              <th>{v.title}</th>
              <th>{v.writer}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>검색결과</h2>
      {true && (
        <table
          border={1}
          cellSpacing={0}
          style={{ margin: "30px auto", width: "500px" }}
        >
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {searchList.map((v) => (
              <tr>
                <th>{v.id}</th>
                <th>{v.title}</th>
                <th>{v.writer}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Practice;
