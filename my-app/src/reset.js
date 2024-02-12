import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload(true);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <h1>프로그램</h1>
      <p>이 페이지는 5초마다 새로고침됩니다.</p>
    </div>
  );
}

export default App;
