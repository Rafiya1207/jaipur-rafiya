import {makeDeck} from "../src/makeShuffledDeck.js"
import {assertEquals} from "jsr:@std/assert"

Deno.test("Make the deck", () => {
  assertEquals(makeDeck(), [
  "DA", "DA", "DA", "DA", "DA", "DA", "GO",
  "GO", "GO", "GO", "GO", "GO", "SI", "SI",
  "SI", "SI", "SI", "SI", "CL", "CL", "CL",
  "CL", "CL", "CL", "CL", "CL", "SP", "SP",
  "SP", "SP", "SP", "SP", "SP", "SP", "LE",
  "LE", "LE", "LE", "LE", "LE", "LE", "LE",
  "LE", "LE", "CA", "CA", "CA", "CA", "CA",
  "CA", "CA", "CA"
])
})