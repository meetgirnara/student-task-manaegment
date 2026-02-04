import React from "react";
import "../index.css";

const TaskList = () => {
    return (
    <div className="task-grid">
      {/* Task Card 1 */}
        <div className="task-card" style={{ Position: "relative" }}>
        <h3>Complete React Assignment</h3>
        <p>Finish task maneger UI and styling</p>

        <div className="task-meta">
            <span>Date: 2026-02-10</span>
            <span className="priority-high priority-high">High</span>
        </div>

        <div className="task-action">
            <button
            className="btn-icon"
            style={{ background: "#00d2ff" }}
            title="Edit Task"
            >
            ✏️
            </button>
            <button
            className="btn-icon"
            style={{ background: "#00b894" }}
            title="Mark Complete"
            >
            ✔️
            </button>
            <button
            className="btn-icon"
            style={{ background: "red" }}
            title="Delete Task"
            >
            🗑️
            </button>
        </div>
        </div>
    </div>
    );
};

export default TaskList;
