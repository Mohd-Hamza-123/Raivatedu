"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

type CourseFiltersProps = {
  categories: string[];
  levels: string[];
  onSortChange: (sort: string) => void;
};

export function CourseFilters({ categories, levels, onSortChange }: CourseFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read initial state from URL
  const currentCategory = searchParams.get("category") || "All";
  const currentLevel = searchParams.get("level") || "All";
  const currentSort = searchParams.get("sort") || "newest";

  // Update URL when filters change
  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "All") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/courses?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
      
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        {/* Category Filter */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="category-filter" className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
            Category
          </label>
          <select
            id="category-filter"
            value={currentCategory}
            onChange={(e) => updateFilter("category", e.target.value)}
            className="rounded-lg border border-indigo-100 bg-offwhite px-3 py-2 text-sm font-medium text-ink focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="All">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Level Filter */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="level-filter" className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
            Level
          </label>
          <select
            id="level-filter"
            value={currentLevel}
            onChange={(e) => updateFilter("level", e.target.value)}
            className="rounded-lg border border-indigo-100 bg-offwhite px-3 py-2 text-sm font-medium text-ink focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="All">All Levels</option>
            {levels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Sort Control */}
      <div className="flex flex-col gap-1.5 md:items-end">
        <label htmlFor="sort-filter" className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
          Sort by
        </label>
        <select
          id="sort-filter"
          value={currentSort}
          onChange={(e) => {
            updateFilter("sort", e.target.value);
            onSortChange(e.target.value); // Notify parent if needed
          }}
          className="rounded-lg border border-indigo-100 bg-offwhite px-3 py-2 text-sm font-medium text-ink focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

    </div>
  );
}