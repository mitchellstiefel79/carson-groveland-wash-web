
interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep = ({ step, title, description }: ProcessStepProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProcessStep;
