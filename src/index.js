// 2021-02-04 https://webpack.js.org/guides/author-libraries#authoring-a-library
import _ from 'lodash';
import numRef from './ref.json';
export function numToWord(num) {return _.reduce(numRef, (accum, ref) => {return ref.num === num ? ref.word : accum;}, '');}
export function wordToNum(word) {return _.reduce(numRef, (accum, ref) => {return (
	ref.word === word && word.toLowerCase() ? ref.num : accum
);}, -1);}