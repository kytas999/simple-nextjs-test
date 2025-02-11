import { FC, ReactNode } from 'react';

interface ErrorMsgProps {
  children: ReactNode;
}

const ErrorMsg: FC<ErrorMsgProps> = ({ children }) => {
  return (
    <section className="flex flex-col items-center justify-center h-full gap-12">
      <p className="text-4xl font-bold">Error</p>

      {children}
    </section>
  );
};

export default ErrorMsg;
