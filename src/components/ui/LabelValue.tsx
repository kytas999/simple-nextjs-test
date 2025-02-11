import { FC } from 'react';

interface LabelValueProps {
  label: string;
  value: string;
  centered?: boolean;
}

const LabelValue: FC<LabelValueProps> = ({ label, value, centered }) => {
  return (
    <div>
      <p className={`break-words ${centered ? 'text-center' : ''}`}>
        <strong>{label}:</strong> {value}
      </p>
    </div>
  );
};

export default LabelValue;
