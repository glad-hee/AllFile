function SyntheticEvent() {
  function syntheticEvent(e) {
    // Synthetic Event
    // web browser 의 nativeEvent 가 아니라
    // nativEvent를 감싼 Synthetic Event 를 사용함
    // 리엑트 고유 이벤트 객체!
    console.log(e);
  }

  function printInputValue(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <button onClick={syntheticEvent}>Synthetic Event</button>
      <input
        type="text"
        placeholder="아무거나입력"
        onChange={printInputValue}
      />
    </div>
  );
}

export default SyntheticEvent;
