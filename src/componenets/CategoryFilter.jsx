function CategoryFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="category-filter"
    >
      <option value="All">All</option>
      <option value="Web">Web</option>
      <option value="CS">CS</option>
      <option value="Design">Design</option>
    </select>
  );
}

export default CategoryFilter;