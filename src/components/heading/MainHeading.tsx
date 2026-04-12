type HeadingProps = {
  text: string;
};
const MainHeading = ({ text }: HeadingProps) => {
  return <h2 className="main-heading">{text}</h2>;
};

export default MainHeading;