import Completed from '../../icons/solution-status/Completed';
import Cancelled from '../../icons/solution-status/Cancelled';
import CompletedError from '../../icons/solution-status/Error';
import Failed from '../../icons/solution-status/Failed';
import New from '../../icons/solution-status/New';
// import PostProcessing from '../../icons/solution-status/PostProcessing';
// import PreProcessing from '../../icons/solution-status/PreProcessing';
import Queued from '../../icons/solution-status/Queued';
import Running from '../../icons/solution-status/Running';
// import Waiting from '../../icons/solution-status/Waiting';
import WaitingSolver from '../../icons/solution-status/WaitingSolver';
// import Unknown from '../../icons/solution-status/Unknown';

export const SOLUTION_STATUS_CONFIGS = {
    new: {
        label: 'New',
        icon: New,
        isCancellable: true,
    },
    queued: {
        label: 'Queued',
        icon: Queued,
        isCancellable: true,
    },
    running: {
        label: 'In Progress',
        icon: Running,
        isCancellable: true,
        isRunning: true,
    },
    postprocessing: {
        label: 'Post-Processing',
        icon: Running,
    },
    preprocessing: {
        label: 'Pre-Processing',
        icon: Running,
        isCancellable: true,
    },
    completedsuccess: {
        label: 'Successful',
        icon: Completed,
    },
    completederror: {
        label: 'Completed with Error',
        icon: CompletedError,
    },
    cancelled: {
        label: 'Cancelled',
        icon: Cancelled,
    },
    unknown: {
        label: 'Unknown',
        icon: New,
        isCancellable: true,
    },
    waitingforremotesolver: {
        label: 'Waiting For Remote Solver',
        icon: WaitingSolver,
        isCancellable: true,
    },
    assignedtopool: {
        label: 'Assigned To Pool',
        icon: Queued,
        isCancellable: true,
    },
    assignedtoagent: {
        label: 'Assigned To Agent',
        icon: Queued,
        isCancellable: true,
    },
    failed: {
        label: 'Failed',
        icon: Failed,
    },
};
