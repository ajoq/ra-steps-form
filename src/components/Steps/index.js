import { useState } from 'react';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import StepsForm from '../StepsForm';
import StepsList from '../StepsList';
import './index.css';

const initialSteps = [
    {
        id: 1,
        date: dayjs('2023-02-02'),
        distance: 5.7,
    },
    {
        id: 2,
        date: dayjs('2023-01-24'),
        distance: 14.2,
    },
    {
        id: 3,
        date: dayjs('2023-02-13'),
        distance: 3.4,
    },
];

function Steps() {
    const sortDate = (a, b) => b.date - a.date;
    const isitialStepsSort = [...initialSteps];
    isitialStepsSort.sort(sortDate);

    const [steps, setSteps] = useState(isitialStepsSort);
    const [form, setForm] = useState({ date: '', distance: '' });

    const handleFormChange = (evt) => {
        const { name, value } = evt.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddStep = (evt) => {
        evt.preventDefault();

        const isDateExist = steps.some((item) =>
            item.date.isSame(dayjs(form.date))
        );

        if (isDateExist) {
            setSteps(
                steps.map((item) => {
                    if (item.date.isSame(dayjs(form.date))) {
                        return {
                            ...item,
                            distance: +item.distance + +form.distance,
                        };
                    } else {
                        return item;
                    }
                })
            );
        } else {
            const newSteps = [
                ...steps,
                {
                    id: nanoid(),
                    date: dayjs(form.date),
                    distance: form.distance,
                },
            ];

            newSteps.sort(sortDate);
            setSteps(newSteps);
        }

        setForm({ date: '', distance: '' });
    };

    const handleChangeStep = (nextStep) => {
        setSteps(
            steps.map((item) => {
                if (item.id === nextStep.id) {
                    return nextStep;
                } else {
                    return item;
                }
            })
        );
    };

    const handleRemoveStep = (id) => {
        setSteps(steps.filter((item) => item.id != id));
    };

    return (
        <div className="steps">
            <StepsForm
                form={form}
                onAddStep={handleAddStep}
                onFormChange={handleFormChange}
            />
            <StepsList
                steps={steps}
                onChangeStep={handleChangeStep}
                onRemoveStep={handleRemoveStep}
            />
        </div>
    );
}

export default Steps;
