export default function JoinLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className="h-screen w-full flex-1">{children}</div>;
}
