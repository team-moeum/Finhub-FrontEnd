import reactDom from 'react-dom';

type Props = {
  children: React.ReactNode;
};

export default function ToastPortal({ children }: Props) {
  if (typeof window === 'undefined') return null;

  const node = document.getElementById('toast-portal') as Element;
  return reactDom.createPortal(children, node);
}