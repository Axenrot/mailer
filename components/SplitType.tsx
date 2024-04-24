const SplitType = ({
  text,
  className,
  wordGap = 30,
}: {
  text: string;
  className?: string;
  wordGap?: number;
}) => {
  return (
    <>
      {text.split("").map((letter, index) => {
        if (letter == " ") {
          return (
            <p style={{ width: `${wordGap}px` }} key={`letter-${index}`}>
              {letter}
            </p>
          );
        } else {
          return (
            <p className={className} key={`letter-${index}`}>
              {letter}
            </p>
          );
        }
      })}
    </>
  );
};

export default SplitType;
