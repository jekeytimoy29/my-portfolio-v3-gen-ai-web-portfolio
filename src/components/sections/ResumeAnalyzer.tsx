import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { Upload, FileText, X, CheckCircle, Sparkles, Download, Copy } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { cn } from '../../utils/cn';

interface ResumeData {
  fileName: string;
  uploadedAt: Date;
}

// Mock portfolio guide response
const mockPortfolioGuide = `
## Your Personalized Portfolio Guide

Based on your resume, here's how to create an impressive portfolio website:

### 1. Hero Section
- Use a professional headline that highlights your main expertise
- Add a compelling tagline that showcases your unique value proposition
- Include a professional photo and clear call-to-action buttons

### 2. About Section
- Write a brief professional summary (2-3 paragraphs)
- Highlight your passion and what drives you
- Mention your career goals and what you're looking for

### 3. Experience Section
- List your work history in reverse chronological order
- Use bullet points with quantifiable achievements
- Include technologies used at each role

### 4. Projects Section
- Showcase 3-5 of your best projects
- Include screenshots or live demo links
- Describe the problem solved and technologies used

### 5. Skills Section
- Organize skills by category (Frontend, Backend, Tools, etc.)
- Show proficiency levels where appropriate
- Include both technical and soft skills

### 6. Contact Section
- Provide multiple ways to reach you
- Include links to LinkedIn, GitHub, and other profiles
- Consider adding a contact form

### Pro Tips
- Keep the design clean and professional
- Ensure mobile responsiveness
- Optimize for fast loading times
- Use consistent branding throughout
`;

export function ResumeAnalyzer() {
  const [uploadedFile, setUploadedFile] = useState<ResumeData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [portfolioGuide, setPortfolioGuide] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile({
        fileName: file.name,
        uploadedAt: new Date(),
      });
      setIsProcessing(true);
      setPortfolioGuide(null);

      // Simulate AI processing
      setTimeout(() => {
        setIsProcessing(false);
        setPortfolioGuide(mockPortfolioGuide);
      }, 2500);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
    disabled: isProcessing,
  });

  const clearFile = () => {
    setUploadedFile(null);
    setPortfolioGuide(null);
  };

  const copyToClipboard = () => {
    if (portfolioGuide) {
      navigator.clipboard.writeText(portfolioGuide);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="portfolio-builder" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Create Your Portfolio"
          subtitle="Upload your resume and get personalized guidance on building your own professional portfolio website"
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-600 px-6 py-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-white" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Portfolio Website Generator</h3>
                  <p className="text-sm text-white/80">AI-powered guidance for your personal website</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Upload Area */}
              {!uploadedFile ? (
                <div
                  {...getRootProps()}
                  className={cn(
                    'border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all',
                    isDragActive
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-slate-300 dark:border-slate-600 hover:border-primary-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                  )}
                >
                  <input {...getInputProps()} />
                  <Upload className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {isDragActive ? 'Drop your resume here' : 'Drag & drop your resume'}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    or <span className="text-primary-600 dark:text-primary-400 font-medium">browse files</span>
                  </p>
                  <p className="text-xs text-slate-400">Supports PDF and DOCX (max 5MB)</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Uploaded File Info */}
                  <div
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-xl',
                      'bg-slate-50 dark:bg-slate-700/50',
                      portfolioGuide && 'bg-green-50 dark:bg-green-900/20'
                    )}
                  >
                    <FileText
                      className={cn(
                        'w-10 h-10',
                        portfolioGuide ? 'text-green-600' : 'text-primary-600'
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 dark:text-white truncate">
                        {uploadedFile.fileName}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {isProcessing ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-pulse">Analyzing your resume...</span>
                          </span>
                        ) : portfolioGuide ? (
                          <span className="text-green-600 flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" /> Analysis complete
                          </span>
                        ) : (
                          'Ready to analyze'
                        )}
                      </p>
                    </div>
                    {!isProcessing && (
                      <button
                        onClick={clearFile}
                        className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                        aria-label="Remove file"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* Loading Animation */}
                  {isProcessing && (
                    <div className="flex flex-col items-center py-8">
                      <div className="relative w-16 h-16 mb-4">
                        <div className="absolute inset-0 border-4 border-primary-200 dark:border-primary-900 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-full animate-spin"></div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">
                        Generating your personalized portfolio guide...
                      </p>
                    </div>
                  )}

                  {/* Portfolio Guide Result */}
                  {portfolioGuide && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          Your Portfolio Guide
                        </h4>
                        <button
                          onClick={copyToClipboard}
                          className={cn(
                            'flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors',
                            copied
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
                          )}
                        >
                          {copied ? (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 max-h-96 overflow-y-auto">
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          {portfolioGuide.split('\n').map((line, index) => {
                            if (line.startsWith('## ')) {
                              return (
                                <h2 key={index} className="text-xl font-bold text-primary-600 dark:text-primary-400 mt-4 mb-3">
                                  {line.replace('## ', '')}
                                </h2>
                              );
                            }
                            if (line.startsWith('### ')) {
                              return (
                                <h3 key={index} className="text-lg font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
                                  {line.replace('### ', '')}
                                </h3>
                              );
                            }
                            if (line.startsWith('- ')) {
                              return (
                                <p key={index} className="text-slate-600 dark:text-slate-400 ml-4 mb-1">
                                  • {line.replace('- ', '')}
                                </p>
                              );
                            }
                            if (line.trim()) {
                              return (
                                <p key={index} className="text-slate-600 dark:text-slate-400 mb-2">
                                  {line}
                                </p>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={clearFile}
                          className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        >
                          Upload Different Resume
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: 'AI-Powered Analysis',
                description: 'Our AI analyzes your resume to understand your skills and experience',
              },
              {
                title: 'Personalized Guide',
                description: 'Get tailored recommendations for showcasing your unique background',
              },
              {
                title: 'Best Practices',
                description: 'Learn industry best practices for creating an impressive portfolio',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
