export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatWeeksOnList = (weeksOnList: number): string => {
  return weeksOnList > 0 ? `${weeksOnList}주 연속` : "신규";
};

export const getBookDescription = (
  description: string,
  title: string
): string => {
  if (!description || description.trim() === "") {
    return `${title}에 대한 추가 정보는 제공되지 않습니다. 더 자세한 내용은 구매 링크를 참조하세요.`;
  }
  return description;
};
