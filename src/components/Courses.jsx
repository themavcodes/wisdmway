// src/components/Courses.jsx

const coursesData = [
  {
    category: "Engineering",
    courses: [
      "Computer Science",
      "Mechanical",
      "Civil",
      "Electronics",
      "Electrical",
    ],
  },
  {
    category: "Medical",
    courses: ["MBBS", "Dentistry", "Pharmacy", "Nursing", "Biomedical Science"],
  },
  {
    category: "Commerce",
    courses: [
      "Accounting",
      "Finance",
      "Business Studies",
      "Economics",
      "Marketing",
    ],
  },
];

const Courses = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Explore Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coursesData.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.courses.map((course, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
