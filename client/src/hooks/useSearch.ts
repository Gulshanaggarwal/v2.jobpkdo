import { useEffect } from "react";

const searchArray = [
	"React",
	"JavaScript",
	"Python",
	"Java",
	"C++",
	"Ruby",
	"Full-stack",
	"Front-end",
];

export default function useSearch(search: string) {
	let result: string[] = [];

	result = searchArray.filter((item) => item.startsWith(search));

	return result;
}
