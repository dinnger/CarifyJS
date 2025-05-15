import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
	state: () => ({
		count: 0,
	}),
	getters: {
		doubleCount: (state) => state.count * 20,
	},
	actions: {
		increment() {
			this.count++;
		},
	},
});
