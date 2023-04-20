function Clock() {
  return (
    <div className="clock-container">
      <h1>현재 시간은 : {new Date().toLocaleTimeString}</h1>
    </div>
  );
}

export default Clock;

// component 하나의 파일에 하나만 하시죠
