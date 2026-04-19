interface LabelProps {
  text: string;
  required?:boolean;
}

const Label = ({ text, required}: LabelProps) => {
  return (
    <div>
      <p className="app-label">
        {text}
        {required && "*"}
      </p>
    </div>
  );
};

export default Label;