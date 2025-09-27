import { type CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
