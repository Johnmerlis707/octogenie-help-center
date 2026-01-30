"use client";

import { useState } from "react";
import { Icons } from "@/lib/icons";

interface FeedbackSectionProps {
  pageId?: string;
}

export default function FeedbackSection({ pageId }: FeedbackSectionProps) {
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() || liked !== null) {
      // Here you would typically send the feedback to your backend
      console.log("Feedback submitted:", { comment, liked, pageId });
      setSubmitted(true);
      setComment("");
      setLiked(null);
      
      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          Was this helpful?
        </h3>
        
        {/* Like/Dislike Buttons */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              liked === true
                ? "bg-green-100 text-green-700 border-2 border-green-300"
                : "bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200"
            }`}
            aria-label="Like this page"
          >
            <Icons.CheckCircle2
              className={`w-5 h-5 ${
                liked === true ? "text-green-600" : "text-gray-500"
              }`}
            />
            <span>Helpful</span>
          </button>

          <button
            onClick={handleDislike}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              liked === false
                ? "bg-red-100 text-red-700 border-2 border-red-300"
                : "bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200"
            }`}
            aria-label="Dislike this page"
          >
            <Icons.X
              className={`w-5 h-5 ${
                liked === false ? "text-red-600" : "text-gray-500"
              }`}
            />
            <span>Not Helpful</span>
          </button>
        </div>

        {/* Comment Box */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="feedback-comment"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Share your feedback (optional)
            </label>
            <textarea
              id="feedback-comment"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us what you think... What can we improve? What was helpful?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Your feedback helps us improve our documentation
            </p>
            <button
              type="submit"
              disabled={!comment.trim() && liked === null}
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Feedback
            </button>
          </div>
        </form>

        {/* Success Message */}
        {submitted && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 text-green-800">
              <Icons.CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">
                Thank you for your feedback!
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
