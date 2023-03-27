import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;  

declare const global: any;

global.document = document;
global.window = document.defaultView;
global.navigator = window.navigator;
