import React, { useEffect } from "react";

const CategoryTabs = ({ categories, selectedCategory, setSelectedCategory, startIndex, setStartIndex, maxVisible }) => {
    // selected category is in view
    useEffect(() => {
        const selectedIndex = categories.indexOf(selectedCategory);
        if (selectedIndex !== -1) {
            if (selectedIndex < startIndex) {
                setStartIndex(selectedIndex);
            } else if (selectedIndex >= startIndex + maxVisible) {
                setStartIndex(selectedIndex - maxVisible + 1);
            }
        }
    }, [selectedCategory, categories, startIndex, maxVisible, setStartIndex]);

    const handleNextCategory = () => {
        if (startIndex + maxVisible < categories.length) setStartIndex(startIndex + 1);
    };

    const handlePrevCategory = () => {
        if (startIndex > 0) setStartIndex(startIndex - 1);
    };

    const visibleCategories = categories.slice(startIndex, startIndex + maxVisible);

    return (
        <div className="text-center mb-4 d-flex justify-content-center align-items-center">
            {startIndex > 0 && (
                <button
                    className="btn mx-2"
                    onClick={handlePrevCategory}
                    disabled={startIndex === 0}
                    style={{ backgroundColor: startIndex === 0 ? "gray" : "white", color: startIndex === 0 ? "white" : "black", cursor: startIndex === 0 ? "not-allowed" : "pointer" }}
                >
                    {"<"}
                </button>
            )}

            {visibleCategories.map((category, index) => (
                <button
                    key={index}
                    className={`btn mx-1 ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}

            {startIndex + maxVisible < categories.length && (
                <button
                    className="btn mx-2"
                    onClick={handleNextCategory}
                    disabled={startIndex + maxVisible >= categories.length}
                    style={{ backgroundColor: startIndex + maxVisible >= categories.length ? "gray" : "white", color: startIndex + maxVisible >= categories.length ? "white" : "black", cursor: startIndex + maxVisible >= categories.length ? "not-allowed" : "pointer" }}
                >
                    {">"}
                </button>
            )}
        </div>
    );
};

export default CategoryTabs;