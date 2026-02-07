import { CheckCircle, AlertCircle, XCircle, Loader } from 'lucide-react';
import { useEffect } from 'react';

interface NotificationProps {
  type: 'success' | 'error' | 'duplicate' | 'loading';
  message: string;
  onClose?: () => void;
  duration?: number; // in milliseconds, 0 = no auto-close
}

const Notification = ({ type, message, onClose, duration = 5000 }: NotificationProps) => {
  useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const baseStyles = 'fixed top-26 right-6 max-w-md p-4 rounded-lg shadow-lg flex items-start gap-4 z-50 animate-in slide-in-from-right-4 fade-in duration-300';

  const typeStyles = {
    success: 'bg-green-50 border border-green-200',
    error: 'bg-red-50 border border-red-200',
    duplicate: 'bg-orange-50 border border-orange-200',
    loading: 'bg-blue-50 border border-blue-200'
  };

  const iconStyles = {
    success: <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />,
    error: <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />,
    duplicate: <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />,
    loading: <Loader className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 animate-spin" />
  };

  const textStyles = {
    success: 'text-green-800',
    error: 'text-red-800',
    duplicate: 'text-orange-800',
    loading: 'text-blue-800'
  };

  return (
    <div className={`${baseStyles} ${typeStyles[type]}`}>
      {iconStyles[type]}
      <div className="flex-1">
        <p className={`font-semibold ${textStyles[type]}`}>
          {type === 'success' && 'Success!'}
          {type === 'error' && 'Error'}
          {type === 'duplicate' && 'Already Registered'}
          {type === 'loading' && 'Submitting...'}
        </p>
        <p className={`text-sm mt-1 ${textStyles[type]} opacity-90`}>{message}</p>
      </div>
      {onClose && type !== 'loading' && (
        <button
          onClick={onClose}
          className={`text-sm font-bold px-3 py-1 rounded hover:bg-black/10 transition-colors ${textStyles[type]}`}
        >
          Dismiss
        </button>
      )}
    </div>
  );
};

export default Notification;
