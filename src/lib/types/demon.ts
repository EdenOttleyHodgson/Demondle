import type { AffinitySet } from "./affinities";
import type { ResistanceSet } from "./resistances";
export interface Demon {
  name: string,
  level: number,
  race: string
  resistances: ResistanceSet,
  stats: StatSet
  affinities: AffinitySet
}
