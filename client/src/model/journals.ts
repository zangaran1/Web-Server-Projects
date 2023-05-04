import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api } from "./session";

export interface Journal {
    owner?: string;
    bodyWeight?: number;
    caloriesEaten?: number;
    date?: Date;
    entryContent?: string;
}

export function getJournals(): Promise<DataListEnvelope<Journal>> {

    return api('journals')

}

export function getJournal(id: number): Promise<DataEnvelope<Journal>> {

    return api(`journals/${id}`)

}

export function createJournal(journal: Journal): Promise<DataEnvelope<Journal>> {
        return api('journals', journal)
}