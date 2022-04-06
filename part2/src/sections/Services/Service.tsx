type PService = { text: string; imgSrc: string; className?: string };

export default function Service({ text, imgSrc, className }: PService) {
  return (
    <div className={'service ' + className}>
      <h4>{text}</h4>

      <div className="learn-more">
        <p>Learn More</p>
      </div>
    </div>
  );
}
