import { format } from 'date-fns';

const formatDateRow = (date, showTime = true) => {
	let formatter = 'yyyy-MM-dd';
	if (showTime) {
		formatter = `k:m ${formatter}`;
	}

	return format(new Date(date), formatter);
};

export default formatDateRow;
