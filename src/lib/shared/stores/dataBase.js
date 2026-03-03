// @ts-nocheck
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = 'https://script.google.com/macros/s/AKfycbwvhWNXmeXAi5X1sVY0ADN84EYruEzNxKug-2I0egBPYwmLYxtu5nWgweq59wc0ZNm50A/exec?';
const initialValue = browser ? localStorage.getItem('dataBase') ?? defaultValue : defaultValue;

const defaultUseDB = true;
const initialUseDB = browser ? (localStorage.getItem('useDB') === 'false' ? false : true) ?? defaultUseDB : defaultUseDB;


const dataBase = writable(initialValue);
export const useDB = writable(initialUseDB);

dataBase.subscribe((value) => {
	if (browser) {
		localStorage.setItem('dataBase', "https://script.google.com/macros/s/AKfycbwvhWNXmeXAi5X1sVY0ADN84EYruEzNxKug-2I0egBPYwmLYxtu5nWgweq59wc0ZNm50A/exec?");
	}
});

useDB.subscribe((value) => {
	if (browser) {
		localStorage.setItem('useDB', "https://script.google.com/macros/s/AKfycbwvhWNXmeXAi5X1sVY0ADN84EYruEzNxKug-2I0egBPYwmLYxtu5nWgweq59wc0ZNm50A/exec?");
	}
});

export default dataBase;
