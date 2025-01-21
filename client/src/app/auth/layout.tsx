export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Registrate</title>
      <main>{children}</main>
    </>
  );
}
