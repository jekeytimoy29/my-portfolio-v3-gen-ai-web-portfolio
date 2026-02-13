import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, X, CheckCircle } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ResumeUploadProps {
  onUpload: (file: File) => void;
  isProcessing?: boolean;
}

export function ResumeUpload({ onUpload, isProcessing }: ResumeUploadProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setUploadedFile(file);
        setUploadSuccess(false);
        onUpload(file);
        // Simulate success after processing
        setTimeout(() => setUploadSuccess(true), 1500);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
    disabled: isProcessing,
  });

  const clearFile = () => {
    setUploadedFile(null);
    setUploadSuccess(false);
  };

  return (
    <div className="p-4 border-t border-slate-200 dark:border-slate-700">
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
        Upload your resume to get personalized website creation tips
      </p>

      {uploadedFile ? (
        <div
          className={cn(
            'flex items-center gap-3 p-3 rounded-lg',
            'bg-slate-50 dark:bg-slate-700/50',
            uploadSuccess && 'bg-green-50 dark:bg-green-900/20'
          )}
        >
          <FileText
            className={cn(
              'w-8 h-8',
              uploadSuccess ? 'text-green-600' : 'text-primary-600'
            )}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
              {uploadedFile.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isProcessing ? (
                'Processing...'
              ) : uploadSuccess ? (
                <span className="text-green-600 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Ready to analyze
                </span>
              ) : (
                `${(uploadedFile.size / 1024).toFixed(1)} KB`
              )}
            </p>
          </div>
          {!isProcessing && (
            <button
              onClick={clearFile}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              aria-label="Remove file"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={cn(
            'border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors',
            isDragActive
              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
              : 'border-slate-300 dark:border-slate-600 hover:border-primary-400'
          )}
        >
          <input {...getInputProps()} />
          <Upload className="w-6 h-6 mx-auto text-slate-400 mb-2" />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {isDragActive ? (
              'Drop your resume here'
            ) : (
              <>
                Drag & drop or <span className="text-primary-600">browse</span>
              </>
            )}
          </p>
          <p className="text-xs text-slate-400 mt-1">PDF or DOCX, max 5MB</p>
        </div>
      )}
    </div>
  );
}
