// import Auth from "../src/Auth";
// import Post from "../src/Post";

// export default function App() {
//     return(
//     <> 
//         <Auth />
//         <Post />
//     </>)
// }

import React, { useEffect, useRef } from "react";

function openUrlInIncognito(url) {
  window.open(url, '_blank', 'toolbar=0,location=0,menubar=0');
}

function App() {
  const links = [
    "https://www.clickasnap.com/profile/Minsun/photo/01HPFF9S6TM05TKAK0S4K11X05",
    "https://www.clickasnap.com/profile/Minsun/photo/01HPBVT7S5BFV9DK82W529XRJ4",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP6F6R3YSVPK2PGB5R2RY1G0",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP6F6NC1TKDS21ESYRGX2REJ",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP42QDN3WS8DKQTP3BV5KZ8P",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP42QCQ0E2GGR0P0S6VPD0BM",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP42QBSKT5XY03GFX9V75CBW",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP42QAWTZDVMG7HHBPAD2Z9E",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP42Q9M6YHZ0M1EWRPAG30NH",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP42Q7DTKJY0N126P57VVXZS",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3YGCG8R3VRSG8666V4EF48",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3YGB6XDME821CN4YP0E0ES",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3YG9VS0W2NRZW9KHHNXY7J",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3YG7HHYGSMMJWQE3EWNDN2",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3YG7HHYGSMMJWQE3EWNDN2",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3R69TSCEKZW9DN0QX7NYX0",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3R622PQ8482761E85DAEDV",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3R5X349M6Z83C47CA6AFX1",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3R5MVXZ6NVXQ4FB97YHW0K",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3N1KV6YJ6FGTA18NJVJF6Z",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3N1G0SQFJ673GSKPHMV25F",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3N1D76SQAD1AJE0BDDFGWN",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3N1AYXSVT02KK072SH1VPK",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP3N157JD9R4DZRAFNAH7H3D",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP1J1RHVVVX9ZE83TBF9HYXE",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP1J1PQ1WHKGTGG59K4KYZGZ",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP1J1MGG07V2R2FQCKAEV5SK",
    "https://www.clickasnap.com/profile/Minsun/photo/01HP1HVX6JE3VAAMSY003PB72R",
    "https://www.clickasnap.com/profile/Minsun/photo/01HNYQ6XNXS4GQ0EE5W53J13ZB",
    "https://www.clickasnap.com/profile/Minsun/photo/01HNYQ6W7FF377Q757XBNR0CCZ",
    "https://www.clickasnap.com/profile/Minsun/photo/01HNYQ6TZ0EX67AMSZ7SMFBZP2",
    "https://www.clickasnap.com/profile/Minsun/photo/01HNYQ6SVPE9PC2TWWEXGFE595",
    "https://www.clickasnap.com/profile/Minsun/photo/01HNYQ6RQA5GFTT0C9059TSVWC",
    "https://www.clickasnap.com/profile/Minsun/photo/01HNYQ6QDQ2WDGM7Q3GA0CTGP9",
    "https://www.clickasnap.com/profile/Minsun/photo/01HNYQ6MY04ZGTJVC71JJJ2HEA",
    "https://www.clickasnap.com/profile/Minsun/photo/01HNYM97KV9JFK9DNFHD4366KV",
    "https://www.clickasnap.com/profile/Minsun/photo/01HNYM8B79PNJEMZSQWC1Y52C0",
    "https://www.clickasnap.com/profile/Minsun/photo/01HNYFN9HT5PA7NA1RDSAEA73Z",
  ];

  const currentLinkIndexRef = useRef(-1);

  useEffect(() => {
    const openNextLink = () => {
      const randomIndex = Math.floor(Math.random() * links.length);
      if (currentLinkIndexRef.current === randomIndex) {
        openNextLink();
      } else {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`[${currentTime}] Opening ${links[randomIndex]}`);
        openUrlInIncognito(links[randomIndex]);
        currentLinkIndexRef.current = randomIndex;
      }
    };

    const interval = setInterval(openNextLink, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>리디렉션 프로그램</h1>
      <p>이 페이지를 새 인코그니토 창에서 열어주세요. 단축키 : Ctrl + Shift + N </p>
      <p> 아니면 기다리면 새 창이 열립니다.</p>
      {/* <button onClick={closeWindow}>창 닫기</button>  */}
    </div>
  );
}

export default App;