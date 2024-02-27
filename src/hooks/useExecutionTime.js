import { useState } from 'react';

function useExecutionTime() {
    const [executionTime, setExecutionTime] = useState(0);

    const measureExecutionTime = (callback) => {
        const startTime = performance.now();
        callback();
        const endTime = performance.now();
        const timeInMilliseconds = endTime - startTime;
        setExecutionTime(timeInMilliseconds);
        console.log(`Время выполнения: ${timeInMilliseconds} миллисекунд`);
    };

    return { executionTime, measureExecutionTime };
}

export default useExecutionTime;
