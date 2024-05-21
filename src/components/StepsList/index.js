import Step from '../Step.js/index.js';
import './index.css';

function StepsList({ steps, onChangeStep, onRemoveStep }) {
    return (
        <div className="steps-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Пройдено км</th>
                        <th colSpan={2}>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {steps.map((step) => (
                        <tr key={step.id}>
                            <Step
                                step={step}
                                onChange={onChangeStep}
                                onRemove={onRemoveStep}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StepsList;
