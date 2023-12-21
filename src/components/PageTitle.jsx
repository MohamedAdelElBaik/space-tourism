function PageTitle({ children, num, className }) {
  return (
    <h1 className={`${className} title numbered-title fs-500`}>
      <span>0{num} </span>
      {children}
    </h1>
  );
}

export default PageTitle;
