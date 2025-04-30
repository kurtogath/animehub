'use client';

type LabelTypes = {
    label: string;
    type: string;
    id: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    autoFocus?: boolean;
};

export function LabelInput({
    label,
    type,
    id,
    value,
    required = false,
    autoFocus = false,
    onChange,
}: LabelTypes) {
    const onChangeValue = (value: any) => {
        onChange(value);
    };

    return (
        <>
            <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                type={type}
                id={id}
                value={value}
                onChange={(value) => onChangeValue(value.target.value)}
                required={required}
                autoFocus
            />
        </>
    );
}
