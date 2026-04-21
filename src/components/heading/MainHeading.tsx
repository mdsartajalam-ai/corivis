type MainHeadingProps = {
  text: string;
};

export default function MainHeading({ text }: MainHeadingProps) {
  const parts = text.split(/(\{\{[^}]+\}\})/g);

  return (
    <h2 className="main-heading">
      {parts.map((part, i) =>
        part.startsWith("{{") && part.endsWith("}}") ? (
          <span key={i} className="highlight">
            {part.slice(2, -2)}
          </span>
        ) : (
          part
        )
      )}
    </h2>
  );
}