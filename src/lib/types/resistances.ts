

export type ResistanceType = "Weak" | "Neutral" | "Strong" | "Null" | "Drain" | "Repel"


export class ResistanceSet {
  phys_resistance: String = "Neutral"
  fire_resistance: String = "Neutral"
  ice_resistance: String = "Neutral"
  elec_resistance: String = "Neutral"
  force_resistance: String = "Neutral"
  light_resistance: String = "Neutral"
  dark_resistance: String = "Neutral"
}
