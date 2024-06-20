export function convertDate(timestamp: number) {
  // 타임스탬프를 Date 객체로 변환
  const date = new Date(timestamp);

  // 년, 월, 일, 시간, 분을 추출
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 +1
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  // 형식화된 문자열 생성
  const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;

  return formattedDate;
}
