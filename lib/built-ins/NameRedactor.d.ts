import { ISyncRedactor } from '../types';
export declare class NameRedactor implements ISyncRedactor {
    private replaceWith;
    constructor(replaceWith?: string | ((match: string) => string));
    redact(textToRedact: string): string;
}
