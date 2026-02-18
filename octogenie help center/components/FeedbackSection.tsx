"use client";

import { useState } from "react";
import { Icons } from "@/lib/icons";

interface FeedbackSectionProps {
  pageId?: string;
  /** Total number of users who have viewed this article. Can be connected to analytics. */
  viewCount?: number;
}

export default function FeedbackSection({ pageId, viewCount = 0 }: FeedbackSectionProps) {
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLike = () => {
    if (liked === true) {
      setLiked(null);
    } else {
      setLiked(true);
    }
  };

  const handleDislike = () => {
    if (liked === false) {
      setLiked(null);
    } else {
      setLiked(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() && liked === null) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment,
          liked,
          pageId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit feedback');
      }

      // Success - show success message
      setSubmitted(true);
      setComment("");
      setLiked(null);
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit feedback. Please try again.');
      
      // Fallback: Try mailto link if API fails
      const recipientEmail = 'john@octogenie.com';
      const feedbackType = liked === true ? 'Helpful ✅' : liked === false ? 'Not Helpful ❌' : 'No rating';
      const emailSubject = `Help Center Feedback - ${pageId || 'Unknown Page'}`;
      const emailBody = `Rating: ${feedbackType}\nPage: ${pageId || 'Unknown'}\n\nComment:\n${comment || 'No comment provided'}`;
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open mailto as fallback
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200/60">
      <div className="relative bg-gradient-to-br from-white via-white to-gray-50/50 rounded-2xl border border-gray-200/60 p-6 md:p-8 shadow-lg shadow-gray-200/50 backdrop-blur-sm overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-3xl -z-0" />
        
        {/* Viewer count - visible for all articles */}
        <div className="relative flex items-center gap-2 text-sm mb-6 p-3 rounded-lg bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/50 backdrop-blur-sm">
          <div className="p-1.5 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-sm">
            <Icons.Eye className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-gray-700 font-medium">
            <strong className="text-gray-900 font-bold text-base">{viewCount.toLocaleString()}</strong>{" "}
            {viewCount === 1 ? "user has" : "users have"} viewed this article
          </span>
        </div>

        <h3 className="relative text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
          Was this helpful?
        </h3>
        
        {/* Like/Dislike Buttons - Helpful = green, Not Helpful = orange */}
        <div className="relative flex items-center gap-4 mb-6">
          <button
            onClick={handleLike}
            className={`group flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              liked === true
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-2 border-green-600 shadow-lg shadow-green-200/50"
                : "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-2 border-green-200 hover:border-green-300 hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 shadow-sm hover:shadow-md"
            }`}
            aria-label="Like this page"
          >
            <Icons.CheckCircle2
              className={`w-5 h-5 transition-transform duration-300 ${
                liked === true ? "text-white group-hover:rotate-12" : "text-green-600"
              }`}
            />
            <span>Helpful</span>
          </button>

          <button
            onClick={handleDislike}
            className={`group flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              liked === false
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white border-2 border-orange-600 shadow-lg shadow-orange-200/50"
                : "bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 border-2 border-orange-200 hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 shadow-sm hover:shadow-md"
            }`}
            aria-label="Dislike this page"
          >
            <Icons.X
              className={`w-5 h-5 transition-transform duration-300 ${
                liked === false ? "text-white group-hover:rotate-90" : "text-orange-600"
              }`}
            />
            <span>Not Helpful</span>
          </button>
        </div>

        {/* Comment Box */}
        <form onSubmit={handleSubmit} className="relative space-y-4">
          <div>
            <label
              htmlFor="feedback-comment"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Share your feedback (optional)
            </label>
            <textarea
              id="feedback-comment"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us what you think... What can we improve? What was helpful?"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-none transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-gray-300"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-600 italic">
              💡 Your feedback helps us improve our documentation
            </p>
            <button
              type="submit"
              disabled={(!comment.trim() && liked === null) || isSubmitting}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-emerald-500 text-white rounded-xl font-semibold hover:from-primary/90 hover:to-emerald-500/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Submit Feedback'}
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl shadow-sm animate-fade-in">
            <div className="flex items-center gap-2 text-red-800">
              <div className="p-1 rounded-full bg-red-500">
                <Icons.X className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold">
                {error}
              </span>
            </div>
          </div>
        )}

        {/* Success Message */}
        {submitted && (
          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl shadow-sm animate-fade-in">
            <div className="flex items-center gap-2 text-green-800">
              <div className="p-1 rounded-full bg-green-500">
                <Icons.CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold">
                Thank you for your feedback! 🎉 Your feedback has been sent to john@octogenie.com
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
