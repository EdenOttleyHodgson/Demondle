import type { Demon } from "$lib/types/demon";
import smtVData from "$lib/data/demonDataFive.json"
const smtVCompendium: Demon[] = smtVData

export type CompendiumInstance = "SMTV" | "SMTVV"

export const compendiumMap = new Map<CompendiumInstance, Demon[]>([["SMTV", smtVCompendium]])

