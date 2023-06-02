import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

describe('Test getFullYear function', () => {
    it('should return correct year', () => {
        expect(getFullYear()).toEqual(new Date().getFullYear());
    });
});

describe('Test getFooterCopy function', () => {
    it('should return correct string when true', () => {
        expect(getFooterCopy(true)).toEqual('Holberton School');
    });
    it('should return correct string when false', () => {
        expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
    });
});

describe('Test getLatestNotification function', () => {
    it('should return correct string', () => {
        expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
    });
});