const searchArray = [
	"C",
	"C++",
	"Clojure",
	"Haskell",
	"React",
	"JavaScript",
	"Python",
	"Django",
	"Java",
	"Ruby",
	"Full-stack",
	"Front-end",
	"Backend developer",
	"Full-stack developer",
	"Front-end developer",
	"Backend developer",
	"Machine Learning",
	"ML",
	"Cyber security",
	"Startup",
	"Open-source",
	"Angular",
	"Vue",
	"Jquery",
	"Nodejs",
	"Typescript",
	"Flask",
	"Web developer",
	"Java developer",
	"Python developer",
	"Javascript developer",
	"Ruby developer",
	"Web3",
	"Blockchain",
	"Solidity",
	"Swift",
	"Android developer",
	"Android",
	"IOS",
	"IOS developer",
	"PHP",
	"Larvel",
	"Nextjs",
	"Threejs",
];

export default function useSearch(search: string) {
	let result: string[] = [];

	result = searchArray.filter((item) => item.startsWith(search));

	return result;
}
