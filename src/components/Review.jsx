import React, { useState } from 'react'

const Review = () => {
  const [reviews, setReviews] = useState([
    { name: 'Alice', rating: 5, comment: 'Great product!' },
    { name: 'Bob', rating: 4, comment: 'Very useful.' }
  ])
  const [form, setForm] = useState({ name: '', rating: 5, comment: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setReviews([...reviews, form])
    setForm({ name: '', rating: 5, comment: '' })
  }

  return (
   <>
    <div className="max-w-xl mx-auto p-4 mt-[70px]">
      <h1 className="text-6xl font-bold mb-4 text-center">Reviews</h1>
      <div>
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-4"
          >
            <strong className="text-lg">{r.name}</strong> - {r.rating}⭐
            <div className="text-gray-700 mt-2">{r.comment}</div>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mt-6 mb-2">Add a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          {[5, 4, 3, 2, 1].map((n) => (
            <option key={n} value={n}>
              {n}⭐
            </option>
          ))}
        </select>
        <input
          name="comment"
          placeholder="Your review"
          value={form.comment}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
   </>
  );
}

export default Review
