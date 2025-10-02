export default function Container({ classname, children }) {
  return (
    <div className={`max-w-[1200px] mx-auto ${classname}`}>{children}</div>
  );
}
