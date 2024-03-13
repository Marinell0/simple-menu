import { getHelloWorld } from "../src";

describe("Test hello world", () => {
	it("returns hello world", () => {
		const expected = "Hello, World!";

		const actual = getHelloWorld();

		expect(actual).toBe(expected);
	});
});
