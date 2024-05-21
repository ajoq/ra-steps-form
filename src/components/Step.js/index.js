import { useState } from 'react';
import './index.css';

function Step({ step, onChange, onRemove }) {
    const [isEditing, setIsEditing] = useState(false);

    let editStepContent;

    if (isEditing) {
        editStepContent = (
            <>
                <td className="change">
                    <input
                        className="form-input"
                        name="distance"
                        type="number"
                        value={step.distance}
                        step="0.1"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                e.target.value = 0;
                            }
                            onChange({
                                ...step,
                                distance: e.target.value,
                            });
                        }}
                    />
                </td>
                <td className="action">
                    <button
                        className="action-btn"
                        onClick={() => setIsEditing(false)}
                    >
                        ✔
                    </button>
                </td>
            </>
        );
    } else {
        editStepContent = (
            <>
                <td>{step.distance}</td>
                <td className="action">
                    <button
                        className="action-btn"
                        onClick={() => setIsEditing(true)}
                    >
                        ✎
                    </button>
                </td>
            </>
        );
    }

    return (
        <>
            <td>{step.date.format('DD.MM.YYYY')}</td>
            {editStepContent}
            <td className="action">
                <button
                    className="action-btn"
                    onClick={() => onRemove(step.id)}
                >
                    ✘
                </button>
            </td>
        </>
    );
}

export default Step;
