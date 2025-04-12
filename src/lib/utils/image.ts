export const getBookImageUrl = (imageUrl: string | null): string => {
  if (!imageUrl || imageUrl.trim() === "") {
    return "/images/fallback-book-cover.png";
  }
  return imageUrl;
};
