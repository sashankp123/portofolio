import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    rating: 5,
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFeedbackData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your feedback! I appreciate your input.');
      setFeedbackData({ name: '', rating: 5, feedback: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <section className="mb-8">
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <p className="mb-6 text-gray-700 dark:text-gray-300">
           Please share your thoughts about my portfolio or suggest improvements.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={feedbackData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="Your Name (Optional)"
            />
          </div>
          
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rating</label>
            <select
              id="rating"
              name="rating"
              value={feedbackData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Needs Improvement</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={feedbackData.feedback}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="Share your thoughts, suggestions, or impressions..."
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
            
            {submitMessage && (
              <span className="ml-4 text-green-600 dark:text-green-400 text-sm animate-fade-in">
                {submitMessage}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact; 