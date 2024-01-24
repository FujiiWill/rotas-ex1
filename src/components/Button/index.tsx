import "./styles.css";

type Props = {
  text: string;
};

export default function button({ text }: Props) {
  return (
    <div className="button">
      {text}
    </div>
  );
}
