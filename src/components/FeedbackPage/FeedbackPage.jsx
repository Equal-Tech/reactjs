import React from "react";
import useFeedback from "../../hooks/useFeedback";

const FeedbackPage = () => {
  const { feedback, isLoading, error } = useFeedback();

  return (
    <>
      <h1>Feedback</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {feedback && feedback.length > 0 ? (
        feedback.map((item) => (
          <div key={`feedback-${item.id}`}>
            <p>
              <b>{item.name}</b> ({item.email})
            </p>
            <p>{item.feedback}</p>
          </div>
        ))
      ) : (
        <p>There is no feedback</p>
      )}
    </>
  );
};

export default FeedbackPage;
