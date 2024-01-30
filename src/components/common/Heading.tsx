type S = {
  title: string;
};

const Heading = ({ title }: S) => {
  return (
    <div className="heading">
      <h5 className="heading__title">{title}</h5>
    </div>
  );
};

export default Heading;
