import React from "react";

export default function courseDetials({ params }) {
  return (
    <div>
      <h1>Course Details Page</h1>
      <p>More details coming soon...</p>
      <h2>Course Slug: {params.course_slug}</h2>
    </div>
  );
}
