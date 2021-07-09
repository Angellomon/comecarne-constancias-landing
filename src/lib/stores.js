import { writable } from "svelte/store";

export const email = writable("");
export const isLoading = writable(false);
export const isError = writable(false)
export const isInvalid = writable(false)