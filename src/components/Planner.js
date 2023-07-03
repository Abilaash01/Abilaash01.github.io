import React, { useState } from 'react';

const Planner = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [filters, setFilters] = useState([]);
  const [progress, setProgress] = useState(0);
  const [exerciseOptions, setExerciseOptions] = useState([
    { name: 'Exercise 1', muscleGroup: 'Chest' },
    { name: 'Exercise 2', muscleGroup: 'Back' },
    { name: 'Exercise 3', muscleGroup: 'Legs' },
    { name: 'Exercise 4', muscleGroup: 'Arms' },
    { name: 'Exercise 5', muscleGroup: 'Chest' },
    { name: 'Exercise 6', muscleGroup: 'Back' },
    { name: 'Exercise 7', muscleGroup: 'Legs' },
    { name: 'Exercise 8', muscleGroup: 'Arms' },
  ]);

  const handleFilterToggle = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((item) => item !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const filteredExerciseOptions = exerciseOptions.filter((option) =>
    filters.length === 0 ? true : filters.includes(option.muscleGroup)
  );

  const handleApply = () => {
    console.log('Selected Exercises:', selectedExercises);
  };

  const handleMoveToSelected = (exercise) => {
    setSelectedExercises([...selectedExercises, exercise]);
    setExerciseOptions(exerciseOptions.filter((item) => item.name !== exercise.name));
  };

  const handleMoveToOptions = (exercise) => {
    setSelectedExercises(selectedExercises.filter((item) => item.name !== exercise.name));
    setExerciseOptions([...exerciseOptions, exercise]);
  };

  const handleFillButton = () => {
    if (progress < 5) {
      setProgress(progress + 1);
    }
  };

  const calculateFillWidth = () => {
    const percent = (progress / 5) * 100;
    return percent >= 100 ? '100%' : `${percent}%`;
  };

  return (
    <section className="workout-planner">
      <h2>Workout Planner</h2>
      <div className="filter-section">
        <h3>Filter By Muscle Group:</h3>
        <div className="filter-options">
          <button
            className={`filter-button ${filters.includes('Chest') ? 'active' : ''}`}
            onClick={() => handleFilterToggle('Chest')}
          >
            Chest
          </button>
          <button
            className={`filter-button ${filters.includes('Back') ? 'active' : ''}`}
            onClick={() => handleFilterToggle('Back')}
          >
            Back
          </button>
          <button
            className={`filter-button ${filters.includes('Legs') ? 'active' : ''}`}
            onClick={() => handleFilterToggle('Legs')}
          >
            Legs
          </button>
          <button
            className={`filter-button ${filters.includes('Arms') ? 'active' : ''}`}
            onClick={() => handleFilterToggle('Arms')}
          >
            Arms
          </button>
        </div>
      </div>
      <div className="exercise-list">
        {filteredExerciseOptions.map((exercise) => (
          <div
            className={`exercise-item ${selectedExercises.includes(exercise) ? 'selected' : ''}`}
            onClick={() => handleMoveToSelected(exercise)}
            key={exercise.name}
          >
            <span>{exercise.name}</span>
          </div>
        ))}
      </div>
      <div className="selected-exercises">
        <h3>Selected Exercises:</h3>
        {selectedExercises.length === 0 ? (
          <p>No exercises selected.</p>
        ) : (
          <div className="selected-exercise-cards">
            {selectedExercises.map((exercise) => (
              <div
                className="selected-exercise-card"
                onClick={() => handleMoveToOptions(exercise)}
                key={exercise.name}
              >
                <span>{exercise.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <button onClick={handleApply}>Apply</button>
      <div className="goal-tracker">
        <h3>Goal Tracker</h3>
        <div className="progress-bar">
          <div className="progress-line">
            <div className="progress-fill" style={{ width: calculateFillWidth() }}></div>
          </div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div className={`progress-step ${index < progress ? 'completed' : ''}`} key={index}></div>
          ))}
        </div>
        <button className="fill-button" onClick={handleFillButton} disabled={progress >= 5}>
          Fill
        </button>
      </div>
    </section>
  );
};

export default Planner;
