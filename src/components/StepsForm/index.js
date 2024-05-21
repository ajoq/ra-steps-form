import './index.css';

function StepsForm({ form, onAddStep, onFormChange }) {
    return (
        <div className="steps-form">
            <form className="form" onSubmit={onAddStep}>
                <div className="form-item">
                    <label className="form-lable" htmlFor="date">
                        Дата (дд.мм.ггг)
                    </label>
                    <input
                        className="form-input"
                        name="date"
                        type="date"
                        onChange={onFormChange}
                        value={form.date}
                        required
                    />
                </div>
                <div className="form-item input-distance">
                    <label className="form-lable" htmlFor="distance">
                        Пройдено км
                    </label>
                    <input
                        className="form-input"
                        name="distance"
                        type="number"
                        value={form.distance}
                        onChange={onFormChange}
                        step="0.1"
                        required
                    />
                </div>
                <div className="form-item submit">
                    <button className="submit-btn">ОК</button>
                </div>
            </form>
        </div>
    );
}

export default StepsForm;
