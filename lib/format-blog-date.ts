export function formatBlogDate(dateString: string): string {
  // Parse the input UTC date
  const utcDate = new Date(dateString);

  // Convert UTC → IST (UTC+5:30)
  const istDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000);

  const now = new Date();
  const diffMs = now.getTime() - istDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // If less than 30 days old → show relative time
  if (diffDays < 30) {
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} days ago`;
  }

  // Otherwise → show formatted absolute date in IST
  return istDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
