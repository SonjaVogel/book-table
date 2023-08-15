export const formatDate = date => {
	const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
	const month = date.toLocaleDateString("en-US", { month: "long" });
	const day = date.toLocaleDateString("en-US", { day: "numeric" });

	return `${weekday} ${month} ${day}`;
};
